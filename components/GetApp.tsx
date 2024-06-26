import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-8">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[420px]">
            Scale your business to the next level!
          </h2>
          <p className="regular-16 text-gray-10">
            By developing a highly responsive and functional website or mobile
            app to meet your customers taste.
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Link href="https://wa.me/+2349059680186">
              <Button
                type="button"
                title="Want a Website/Mobile App?"
                //   icon="/apple.svg"
                variant="btn_green"
                full
              />
            </Link>
            <Link href="https://wa.me/+2349059680186">
              <Button
                type="button"
                title="Request Consultation"
                //   icon="/android.svg"
                variant="btn_dark_green_outline"
                full
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
