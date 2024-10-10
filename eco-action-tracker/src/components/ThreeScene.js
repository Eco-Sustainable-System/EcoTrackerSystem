"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const ThreeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cleanup = () => {};

    const loadThree = async () => {
      const THREE = await import("three");
      let scene, camera, renderer, geometry, material, particles;

      const init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        geometry = new THREE.BufferGeometry();
        const vertices = [];

        for (let i = 0; i < 10000; i++) {
          const x = Math.random() * 2000 - 1000;
          const y = Math.random() * 2000 - 1000;
          const z = Math.random() * 2000 - 1000;
          vertices.push(x, y, z);
        }

        geometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(vertices, 3)
        );

        material = new THREE.PointsMaterial({
          color: 0x2ecc71,
          size: 2,
          transparent: true,
          opacity: 0.8,
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        camera.position.z = 1000;
      };

      const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0005;
        renderer.render(scene, camera);
      };

      init();
      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      cleanup = () => {
        window.removeEventListener("resize", handleResize);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    };

    loadThree();

    return () => cleanup();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

export default dynamic(() => Promise.resolve(ThreeScene), { ssr: false });
