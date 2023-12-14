
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      {/*
        <div className='w-100vw h-32 bg-lime-200'>

        </div>
      */}
      <div className="md:flex-row flex h-screen flex-col md:overflow-hidden">
        <div className="w-full flex-none md:w-80">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </>
  );
}