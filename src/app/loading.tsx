import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <section className="fixed flex justify-center items-center min-h-screen z-[99999] w-full inset-0 bg-white/5 backdrop-blur-sm ">
      <Spinner size="lg" color="primary" />
    </section>
  );
};

export default Loading;
