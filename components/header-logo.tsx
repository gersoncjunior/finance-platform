import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <Link href="/dasboard">
      <div className="items-center hidden lg:flex">
        <Image
          src="/logo.svg"
          alt="Finance Platform Logo"
          width={28}
          height={28}
        />
        <p className="font-semibold text-white text-2xl ml-2.5">Finance</p>
      </div>
    </Link>
  );
};
 