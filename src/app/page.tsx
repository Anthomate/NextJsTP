import dynamic from 'next/dynamic';
import Navbar from "@/components/navbar/navbar";
import Title from "@/components/title/title";
import TransactionButton from "@/components/buttons/transaction-button";
import {Suspense} from "react";
import Card from "@/components/card/card";
import CardItem from "@/components/card/card-item";
import BenefitsChart from "@/components/figure/benefits-Chart";
import ProfileCard from "@/components/profile/profile";
import ActionButton from "@/components/buttons/action-button";
import MultiLineChart from "@/components/figure/multiLineChart";

const Donut = dynamic(() => import('@/components/figure/donut'), {
    suspense: true,
    ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-full">

        {/* NavBar */}

        <Navbar />

        {/* Main Dashboard content */}

        <div className="w-full h-full flex">

            {/* Left dashboard part */}

            <div className="w-4/12 p-8">
                <div>
                    <Title
                        title={"Overall Balance"}
                        subtitle={"$11,121.22"}
                        othertitle={""}
                        othertitlesize={""}
                        subtitlesize={"text-4xl font-extrabold"}
                        titlesize={"text-2xl"}/>
                    <div className="flex">
                        <TransactionButton title={"Send"} />
                        <TransactionButton title={"Receive"} />
                        <TransactionButton title={"..."} />
                    </div>
                </div>
                <div>
                    <Title
                        title={"Capabilities"}
                        subtitle={"Total Net Growth of 42%"}
                        othertitle={""}
                        othertitlesize={""}
                        titlesize={"text-2xl"}
                        subtitlesize={"text-xl"}
                    />
                    <Suspense fallback={`Loading...`}>
                        <Donut />
                    </Suspense>
                </div>
            </div>

            {/* Middle dashboard part */}

            <div className="w-6/12">
                <Card bgColor={"bg-zinc-950"}>
                    <div className="flex">
                        <div className="w-1/2">
                            <Title title={"Profit"}
                                   subtitle={"$4,737.99"}
                                   othertitle={"▲ 12.3% year over year"}
                                   othertitlesize={"text-xs text-emerald-200"}
                                   subtitlesize={"text-6xl font-extrabold pb-5 text-white"}
                                   titlesize={"text-xl pb-2 text-gray-600"}/>
                        </div>
                        <div className="w-1/2">
                            <Title title={"Shares"}
                                   subtitle={"$2,556.80"}
                                   othertitle={"▲ 8.5% year over year"}
                                   othertitlesize={"text-xs text-emerald-200"}
                                   subtitlesize={"text-2xl font-extrabold pb-3 text-white"}
                                   titlesize={"text-lg pb-1 text-gray-600"}/>
                            <div>
                            <Suspense fallback={`Loading...`}>
                                <MultiLineChart />
                            </Suspense>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <CardItem src={"/card-item1.png"}
                                  alt={"Bitcoin"} width={50}
                                  height={50} title={"Bitcoin"}
                                  subtitle={"$2,467.30"}
                                  othertitle={""} />
                        <CardItem src={"/card-item2.png"}
                                  alt={"Etherium"} width={50}
                                  height={50} title={"Etherium"}
                                  subtitle={"$1,990.01"}
                                  othertitle={""} />
                        <CardItem src={"/card-item3.png"}
                                  alt={"Dash"}
                                  width={50}
                                  height={50}
                                  title={"Dash"}
                                  subtitle={"$1,455.10"}
                                  othertitle={""} />
                        <CardItem src={"/card-item4.png"}
                                  alt={"Edo"}
                                  width={50}
                                  height={50}
                                  title={"Edo"}
                                  subtitle={"$988.07"}
                                  othertitle={""} />
                    </div>
                </Card>

                <Card bgColor={"bg-white"}>
                    <Title title={"Benefits"}
                           subtitle={""}
                           othertitle={""}
                           titlesize={"text-lg"}
                           subtitlesize={""}
                           othertitlesize={""} />
                    <div className="w-5/6">
                        <BenefitsChart />
                    </div>
                </Card>
            </div>

            {/* Right dashboard part */}

            <div className="w-2/12 flex flex-col items-center justify-center">
                <ProfileCard imageUrl={"/profile.jpg"}
                             name={"Ruben Torff"} />
                <div className="mt-4">
                    <ActionButton src={"/action-icon1.png"}
                                  alt={"Top Up"}
                                  heigth={40}
                                  width={40}
                                  title={"Top Up"} />
                    <ActionButton src={"/action-icon2.png"}
                                  alt={"Transfer"}
                                  heigth={40}
                                  width={40}
                                  title={"Transfer"} />
                    <ActionButton src={"/action-icon3.png"}
                                  alt={"Taxes"}
                                  heigth={40}
                                  width={40}
                                  title={"Taxes"} />
                    <ActionButton src={"/action-icon4.png"}
                                  alt={"Gifts"}
                                  heigth={40}
                                  width={40}
                                  title={"Gifts"} />
                    <ActionButton src={"/action-icon5.png"}
                                  alt={"Portfolio"}
                                  heigth={40}
                                  width={40}
                                  title={"Portfolio"} />
                    <ActionButton src={"/action-icon6.png"}
                                  alt={"More"}
                                  heigth={40}
                                  width={40}
                                  title={"More"} />
                </div>
            </div>
        </div>
    </main>
  );
}
