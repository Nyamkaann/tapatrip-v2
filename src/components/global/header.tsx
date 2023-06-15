import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isRouterName, setRouterName] = useState("tapatrip");

  return (
    <>
      <div className="w-full">
        <div
          className={`fixed w-full backdrop-blur-sm z-40 shadow bg-[#ffffff80]`}
          style={{
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="max-w-xl p-4 sm:max-w-3xl lg:max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="">
              <Image
                src="/images/logo.svg"
                alt={"logo"}
                width={"152"}
                height={"40"}
              />
            </div>
            <div className="flex items-center font-semibold text-button text-sm">
              <a href="#tapatrip" onClick={() => setRouterName("tapatrip")}>
                <button
                  className={`rounded-full border border-transparent ${
                    isRouterName === "tapatrip"
                      ? "text-white bg-button"
                      : "hover:border-button"
                  }  px-4 sm:px-6 py-3`}
                >
                  TAPATRIP
                </button>
              </a>
              <a
                href="#ourservices"
                onClick={() => setRouterName("ourservices")}
              >
                <button
                  className={`rounded-full border border-transparent ${
                    isRouterName === "ourservices"
                      ? "text-white bg-button"
                      : "hover:border-button"
                  }  px-4 sm:px-6 py-3`}
                >
                  OUR SERVICES
                </button>
              </a>
              <a href="#customer" onClick={() => setRouterName("customer")}>
                <button
                  className={`rounded-full border border-transparent ${
                    isRouterName === "customer"
                      ? "text-white bg-button"
                      : "hover:border-button"
                  }  px-4 sm:px-6 py-3`}
                >
                  CUSTOMER CARE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
