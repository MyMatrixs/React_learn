import ThreeJS from '@/src/components/ThreeJS';
import MainLayout from '@/components/MainLayout';

export default function ThreePage() {
  return (
    <MainLayout>
      <div>
        <h1>Three.js 展示</h1>
        <ThreeJS />
      </div>
    </MainLayout>
  );
}