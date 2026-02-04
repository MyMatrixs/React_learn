import Commits from '@/src/components/Commits';
import MainLayout from '@/components/MainLayout';

export default function CommitsPage() {
  return (
    <MainLayout>
      <div>
        <h1>Commits</h1>
        <Commits />
      </div>
    </MainLayout>
  );
}