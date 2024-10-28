import React, { useEffect, useRef ,useState} from 'react';
import * as THREE from 'three'



export default function ThreeJS({imgurl}){
    const canvasRef = useRef(null);

    const cubeRef = useRef(null);
    // const cube =  useRef(null);
    useEffect(() => {
      // 创建场景
      const scene = new THREE.Scene();
  
      // 创建相机
      const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
      camera.position.z = 5;
  
      // 创建渲染器
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(600, 400);
      canvasRef.current.appendChild(renderer.domElement);
  
      // 创建立方体
      const geometry = new THREE.BoxGeometry();


      const textureLoader = new THREE.TextureLoader();

      const material = new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load(imgurl) });
      const cube = new THREE.Mesh(geometry, material);
      cubeRef.current = cube
      scene.add(cube);
  
      // 添加光源
      const light = new THREE.DirectionalLight(0xffffff, 3);
      light.position.set(5, 5, 5);
      scene.add(light);
  
      // 动画循环
      const animate = () => {
        requestAnimationFrame(animate);
  
        // 旋转立方体
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
  
        // 渲染场景
        renderer.render(scene, camera);
      };
  
      // 开始动画循环
      animate();
  
      // 处理窗口大小变化
      const handleResize = () => {
        camera.aspect = 600 / 400;
        camera.updateProjectionMatrix();
        renderer.setSize(600, 400);
      };
  
      window.addEventListener('resize', handleResize);
  
      // 清理函数
      return () => {
        window.removeEventListener('resize', handleResize);
        // 在组件卸载时执行一些清理操作
      };
    }, []);
    useEffect(() => {
      if (cubeRef.current) {
        // 更新纹理
        const newTexture = new THREE.TextureLoader().load(imgurl);
        cubeRef.current.material.map = newTexture;
        cubeRef.current.material.needsUpdate = true;
      }
    }, [imgurl]); // 监听 imgurl 的变化
    return(
        <section>
            <div ref={canvasRef} />
            {/* <p>{imgurl}</p> */}
        </section>

    )
  }