import { Landing } from '@/components/home/landing';
import { Footer } from '@/components/home/footer';
import {Employees} from '@/components/home/employees';

const Home = () => {
  return (
    <div>
      <Landing />
      <Footer />
      <Employees/>
    </div>
  );
}

export default Home;
