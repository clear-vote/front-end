


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <main className="min-h-screen py-32 flex flex-col gap-16 items-center bg-gradient-to-r from-[#FFF4F3] to-[#F5EDFF]">
        {children}
      </main>
  )
}
