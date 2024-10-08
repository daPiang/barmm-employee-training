import Image from "next/image";
import placeholderMan from "../../../public/placeholder/Placeholder-Man.jpg";
import { Divider, Spacer } from "@nextui-org/react";

const DATA = [
  {
    image: placeholderMan,
    title: "All About Henry Cavill 01",
    code: "CVL-001",
    date_of_next_training: "June 4, 2024 10:30am",
  },
  {
    image: placeholderMan,
    title: "All About Henry Cavill 02",
    code: "CVL-002",
    date_of_next_training: "June 5, 2024 10:30am",
  },
  {
    image: placeholderMan,
    title: "All About Henry Cavill 03",
    code: "CVL-003",
    date_of_next_training: "June 6, 2024 10:30am",
  },
  {
    image: placeholderMan,
    title: "All About Henry Cavill 04",
    code: "CVL-004",
    date_of_next_training: "June 7, 2024 10:30am",
  },
  {
    image: placeholderMan,
    title: "All About Henry Cavill 05",
    code: "CVL-005",
    date_of_next_training: "June 8, 2024 10:30am",
  },
  {
    image: placeholderMan,
    title: "All About Henry Cavill 06",
    code: "CVL-006",
    date_of_next_training: "June 9, 2024 10:30am",
  },
  // {image: placeholderMan, title: "All About Henry Cavill 04", code: "CVL-004", date_of_next_training: "June 7, 2024 10:30am"},
  // {image: placeholderMan, title: "All About Henry Cavill 04", code: "CVL-004", date_of_next_training: "June 7, 2024 10:30am"},
];

export default function Upcoming() {
  return (
    <div className='flex flex-col justify-start items-center overflow-y-scroll overflow-hidden mr-3 mt-2'>
      {DATA.map((data, index) => {
        return (
          <>
            <div
              className='flex flex-row justify-center max-w-full max-h-full items-center border-solid border- border-gray'
              key={index}
            >
              <div className='realtive w-[20vh] h-full overflow-hidden'>
                <Image
                  src={data.image}
                  width={0}
                  height={0}
                  alt=''
                  className='w-auto h-[100%] object-fill'
                ></Image>
              </div>
              <div className='flex flex-col text-right mr-2'>
                <p className='text-[1.1rem] font-semibold'>{data.title}</p>
                <p className='text-gray-600'>{data.code}</p>
                <p className='text-gray-600 text-[0.7rem]'>
                  {data.date_of_next_training}
                </p>
              </div>
            </div>
            {index < DATA.length - 1 && (
              <>
                <Spacer y={0.5} />
                <Divider />
                <Spacer y={0.5} />
              </>
            )}
          </>
        );
      })}
    </div>
  );
}
