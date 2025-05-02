import {Button} from "@/components/ui/button";
import Link from 'next/link';
function HomePage() {
  return (
    <div>
      <h1 className='text-3xl'>HomePage</h1>
      <Button variant="outline" size="lg" className="capitalize m-8">click me</Button>

      <Button asChild variant="outline" size="lg" className="capitalize m-8">
        <Link href="/login">Login</Link>
      </Button>
    </div>

  );
}
export default HomePage;
