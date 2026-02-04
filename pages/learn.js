import Learn from '@/src/components/learn';
import MainLayout from '@/components/MainLayout';

export default function LearnPage() {
  return (
    <MainLayout>
      <div>
        <h1>学习内容</h1>
        <Learn />
      </div>
    </MainLayout>
  );
}