import { cn } from "../lib/utils";
import { Marquee } from "../components/magicui/marquee";
import andro from "../asset/andro.jpg"
import ardy from "../asset/ardy.jpg"
import firmas from "../asset/firmas.jpg"
import ihsan from "../asset/ihsan.jpg"
import rizky from "../asset/rizky.jpg"
import syafrizal from "../asset/syafrizal.jpg"

const reviews = [
  {
    name: "Ardy",
    username: "@htze_q",
    body: "Mantap kali website nya, salam dari kolam",
    img:  ardy,
  },
  {
    name: "Rizky",
    username: "@mas.kyy__",
    body: "Sangat berguna jika tidak digunakan",
    img: rizky,
  },
  {
    name: "Ihsan",
    username: "@ihsanrafli",
    body: "Sangat membantu dalam memilih mobil favorit",
    img: ihsan,
  },
  {
    name: "Syafrzal",
    username: "@syzaf",
    body: "Keren sekali, saran buat list recorder bang",
    img: syafrizal,
  },
  {
    name: "Andro",
    username: "@andro.biggens",
    body: "Mantap kali abang nih, btw ada jual proyektor ga bang?",
    img: andro,
  },
  {
    name: "Firmas",
    username: "@frmshbi",
    body: "Sangat bagus dan sangat membantu semangat abang developer",
    img: firmas,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full object-cover w-8 h-8" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>  
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white via-white/0 to-transparent dark:from-black dark:via-gray-950/0 z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white via-white/0 to-transparent dark:from-black dark:via-gray-950/0 z-10"></div>
    </div>
  );
}
