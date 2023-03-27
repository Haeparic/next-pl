import Link from "next/link";
import DevAni from "../components/DebAni";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              프론트엔드 개발자&nbsp;
              <br className="hidden lg:inline-block" />
              엄준식
            </h1>
            <p className="mb-8 leading-relaxed">
              내린 하나에 흙으로 별을 이름과, 까닭입니다. 별들을 헤는 아름다운
              경, 책상을 토끼, 둘 부끄러운 써 있습니다. 어머니, 피어나듯이
              사랑과 나의 자랑처럼 듯합니다. 차 새워 가을로 듯합니다. 지나가는
              위에 이름을 했던 있습니다. 토끼, 아직 않은 묻힌 별 옥 별에도
              거외다. 된 당신은 비둘기, 버리었습니다. 사랑과 이름자를 별 우는
              나는 나는 딴은 같이 듯합니다. 이름과 프랑시스 보고, 당신은 내일
              버리었습니다.
            </p>
            <div className="flex justify-center">
              <Link href="/portfolio">
                <button className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">
                  Portfolio
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <DevAni />
          </div>
        </div>
      </section>
    </>
  );
}
