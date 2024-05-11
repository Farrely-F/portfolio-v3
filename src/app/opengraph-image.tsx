/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "FARREL.DEV";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const geistSans = await fetch(
    new URL("../fonts/GeistSans.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  const geistMono = await fetch(
    new URL("../fonts/GeistMono.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  try {
    return new ImageResponse(
      (
        <div tw="flex h-full w-full items-center justify-between bg-black text-white flex-row-reverse">
          <img
            tw="opacity-10 w-2/3 h-full"
            src={
              "https://cdn.britannica.com/65/237365-138-03A2AF7F/did-you-know-The-School-of-Athens-Raphael.jpg?w=800&h=450&c=crop"
            }
            width={60}
            height={60}
            style={{
              objectFit: "cover",
            }}
          />
          <img
            src="https://svgsilh.com/svg/1614045.svg"
            width={100}
            height={100}
            tw="absolute -right-1/3 bottom-0 w-full h-full opacity-5"
            style={{
              filter: "invert(100%)",
              objectFit: "cover",
            }}
          />
          <div
            tw="absolute left-[25%] bg-black w-[240px] h-[120%]"
            style={{ transform: "rotate(15deg)" }}
          ></div>

          <div tw="flex flex-col pl-10">
            <h2
              tw="text-5xl font-bold tracking-wider"
              style={{
                fontFamily: "GeistMono",
              }}
            >
              FARREL.DEV🔮
            </h2>
            <p
              tw="w-full max-w-xs text-lg"
              style={{
                fontFamily: "GeistSans",
              }}
            >
              Front End wizzard that ready to turn your dream into reality.
              Together, lets build an App that{`'`}s scale.
            </p>
          </div>
        </div>
      ),
      {
        ...size,
        emoji: "fluent",
        fonts: [
          {
            name: "GeistSans",
            data: geistSans,
            style: "normal",
            weight: 400,
          },
          {
            name: "GeistMono",
            data: geistMono,
            style: "normal",
            weight: 400,
          },
        ],
      },
    );
  } catch (error) {
    console.error("error", error);
  }
}
