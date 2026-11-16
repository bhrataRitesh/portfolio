"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface NodeData {
  name: string;
  role: string;
  color: string;
  radius: number;
  speed: number;
  angle: number;
  elevation: number;
}

const NODES_CONFIG: NodeData[] = [
  { name: "Node.js Core", role: "High-Throughput API Engine", color: "#10b981", radius: 2.7, speed: 0.008, angle: 0, elevation: 0.5 },
  { name: "RabbitMQ Queue", role: "3-Queue Async Ingestion", color: "#f59e0b", radius: 3.2, speed: -0.006, angle: 1.0, elevation: -0.6 },
  { name: "PostgreSQL (pgvector)", role: "Relational & Vector Storage", color: "#38bdf8", radius: 2.9, speed: 0.005, angle: 2.2, elevation: 0.8 },
  { name: "Redis Cache", role: "Sub-5ms Session & Queues", color: "#ef4444", radius: 3.5, speed: -0.007, angle: 3.3, elevation: -0.3 },
  { name: "Amazon SP-API", role: "Batched Catalog Sync", color: "#818cf8", radius: 3.8, speed: 0.004, angle: 4.5, elevation: 0.4 },
  { name: "Playwright E2E", role: "Automated Flow Verification", color: "#a855f7", radius: 3.3, speed: 0.006, angle: 5.4, elevation: -0.7 },
];

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTooltip, setActiveTooltip] = useState<{ name: string; role: string; x: number; y: number } | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 420;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- Check Theme ---
    const isDark = document.documentElement.getAttribute("data-theme") !== "light";
    const primaryAccent = isDark ? 0x38bdf8 : 0x2563eb;
    const secondaryAccent = isDark ? 0x818cf8 : 0x4f46e5;
    const wireframeColor = isDark ? 0x334155 : 0xcbd5e1;
    const coreColor = isDark ? 0x0f172a : 0xf1f5f9;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.7 : 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(primaryAccent, isDark ? 2.5 : 1.8, 20);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(secondaryAccent, isDark ? 2.0 : 1.4, 20);
    pointLight2.position.set(-4, -4, 3);
    scene.add(pointLight2);

    // --- Central Architecture Core ---
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Outer Geodesic Polyhedron
    const outerGeo = new THREE.IcosahedronGeometry(1.9, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: primaryAccent,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.35 : 0.45,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // Inner Solid Faceted Core
    const innerGeo = new THREE.OctahedronGeometry(1.15, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: coreColor,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // Inner Wireframe Accent
    const innerWireGeo = new THREE.OctahedronGeometry(1.17, 0);
    const innerWireMat = new THREE.MeshBasicMaterial({
      color: secondaryAccent,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const innerWireMesh = new THREE.Mesh(innerWireGeo, innerWireMat);
    mainGroup.add(innerWireMesh);

    // Orbital Equatorial Rings
    const ringGeo1 = new THREE.RingGeometry(2.35, 2.38, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: wireframeColor,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(2.85, 2.87, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: primaryAccent,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = Math.PI / 6;
    mainGroup.add(ring2);

    // --- Orbiting Service Nodes ---
    const nodeMeshes: { mesh: THREE.Mesh; data: NodeData; initialAngle: number }[] = [];
    const lineMeshes: THREE.Line[] = [];

    NODES_CONFIG.forEach((node) => {
      const nodeGeo = new THREE.SphereGeometry(0.14, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(node.color),
        emissive: new THREE.Color(node.color),
        emissiveIntensity: isDark ? 0.6 : 0.3,
        roughness: 0.2,
        metalness: 0.5,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.userData = node;

      // Glow halo ring for each node
      const haloGeo = new THREE.RingGeometry(0.2, 0.23, 24);
      const haloMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(node.color),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      nodeMesh.add(haloMesh);

      mainGroup.add(nodeMesh);
      nodeMeshes.push({ mesh: nodeMesh, data: node, initialAngle: node.angle });

      // Dynamic connector line from core to node
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 0),
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(node.color),
        transparent: true,
        opacity: isDark ? 0.35 : 0.25,
      });
      const lineMesh = new THREE.Line(lineGeo, lineMat);
      mainGroup.add(lineMesh);
      lineMeshes.push(lineMesh);
    });

    // --- Floating Particle Field Around Architecture ---
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.0 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: primaryAccent,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // --- Interactive Mouse & Drag Handling ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.2;
    let targetRotationY = -0.4;
    let isDragging = false;
    let previousPointerPosition = { x: 0, y: 0 };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousPointerPosition = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (isDragging) {
        const deltaX = clientX - previousPointerPosition.x;
        const deltaY = clientY - previousPointerPosition.y;

        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;

        previousPointerPosition = { x: clientX, y: clientY };
      } else {
        const rect = container.getBoundingClientRect();
        mouseX = ((clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((clientY - rect.top) / rect.height) * 2 + 1;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 500);
    };

    container.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);

    container.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    // --- Raycasting for Node Hover Tooltip ---
    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const handleRaycastHover = (e: MouseEvent) => {
      if (isDragging) return;
      const rect = container.getBoundingClientRect();
      mouseVector.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVector.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes.map((n) => n.mesh));

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const data = hit.userData as NodeData;
        if (data && data.name) {
          const hitPos = new THREE.Vector3();
          hit.getWorldPosition(hitPos);
          hitPos.project(camera);

          const screenX = ((hitPos.x + 1) * rect.width) / 2;
          const screenY = ((-hitPos.y + 1) * rect.height) / 2;

          setActiveTooltip({
            name: data.name,
            role: data.role,
            x: screenX,
            y: screenY,
          });
          container.style.cursor = "pointer";
          return;
        }
      }
      setActiveTooltip(null);
      container.style.cursor = isDragging ? "grabbing" : "grab";
    };

    container.addEventListener("mousemove", handleRaycastHover);

    // --- Window Resize Handling ---
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // --- Visibility Pausing with IntersectionObserver ---
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // --- Animation Loop ---
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = (performance.now() - startTime) / 1000;

      // Smooth inertia rotation
      if (!isDragging) {
        targetRotationY += 0.002;
        targetRotationX = THREE.MathUtils.lerp(targetRotationX, mouseY * 0.25, 0.05);
        targetRotationY = THREE.MathUtils.lerp(targetRotationY, targetRotationY + mouseX * 0.003, 0.05);
      }

      mainGroup.rotation.x = THREE.MathUtils.lerp(mainGroup.rotation.x, targetRotationX, 0.08);
      mainGroup.rotation.y = THREE.MathUtils.lerp(mainGroup.rotation.y, targetRotationY, 0.08);

      // Core pulsing & counter-rotation
      innerMesh.rotation.y = -elapsedTime * 0.4;
      innerMesh.rotation.x = elapsedTime * 0.2;
      innerWireMesh.rotation.y = -elapsedTime * 0.4;
      innerWireMesh.rotation.x = elapsedTime * 0.2;
      outerMesh.rotation.y = elapsedTime * 0.15;

      // Orbiting nodes and connecting lines
      nodeMeshes.forEach((item, index) => {
        const currentAngle = item.initialAngle + elapsedTime * item.data.speed * 8;
        const x = Math.cos(currentAngle) * item.data.radius;
        const z = Math.sin(currentAngle) * item.data.radius;
        const y = item.data.elevation + Math.sin(elapsedTime * 1.5 + index) * 0.15;

        item.mesh.position.set(x, y, z);
        item.mesh.rotation.y = elapsedTime * 0.8;

        // Update connecting line geometry
        const line = lineMeshes[index];
        const positions = line.geometry.attributes.position as THREE.BufferAttribute;
        positions.setXYZ(0, 0, 0, 0);
        positions.setXYZ(1, x, y, z);
        positions.needsUpdate = true;
      });

      // Floating particles rotation
      particles.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();

      container.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);

      container.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);

      container.removeEventListener("mousemove", handleRaycastHover);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      innerWireGeo.dispose();
      innerWireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-3d-container"
      style={{
        width: "100%",
        height: "440px",
        position: "relative",
        cursor: "grab",
        userSelect: "none",
        touchAction: "none",
      }}
    >
      {/* 3D Interaction Control Pill */}
      <div
        className="hero-3d-hint"
        style={{
          position: "absolute",
          bottom: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 12px",
          borderRadius: "6px",
          background: "var(--bg-card)",
          border: "1px solid var(--border-color)",
          fontSize: "0.75rem",
          color: "var(--text-tertiary)",
          pointerEvents: "none",
          zIndex: 5,
          boxShadow: "var(--shadow-sm)",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: isInteracting ? "var(--accent-primary)" : "var(--text-tertiary)",
            transition: "background-color 0.2s ease",
          }}
        />
        <span>{isInteracting ? "Rotating 3D Scene" : "Interactive 3D • Drag to rotate"}</span>
      </div>

      {/* Dynamic 3D Node Hover Tooltip */}
      {activeTooltip && (
        <div
          className="hero-3d-tooltip"
          style={{
            position: "absolute",
            left: `${activeTooltip.x}px`,
            top: `${activeTooltip.y - 45}px`,
            transform: "translate(-50%, -50%)",
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            borderRadius: "6px",
            padding: "6px 10px",
            pointerEvents: "none",
            zIndex: 20,
            boxShadow: "var(--shadow-md)",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)" }}>
            {activeTooltip.name}
          </div>
          <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", marginTop: "2px" }}>
            {activeTooltip.role}
          </div>
        </div>
      )}
    </div>
  );
}
