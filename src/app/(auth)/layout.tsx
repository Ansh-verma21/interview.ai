interface Props{
    children: React.ReactNode;
};

const Layout=({ children }: Props) => {
    return (
        <div className="bg-muted flex flex-col items-center min-h-svh justify-center p-6 md:p-10 ">
            <div className="w-full max-w-sm md:max-w-3xl">
            {children}

        </div>
        </div>
        )
}
export default Layout;