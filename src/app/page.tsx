import Header from '@/components/header/Header';
import Introduce from '@/components/Introduce/Introduce';

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <div className="container mx-auto mt-16">
        <Introduce />
      </div>
    </div>
  );
}
