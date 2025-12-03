import Entry from "../components/Common/modules/Entry";
import { getDictionary } from "./dictionaries";
import { tParams } from "./layout";

export default async function IndexPage({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return (
    <div
      dir={lang !== "ar" && lang !== "fa" ? "ltr" : "rtl"}
      className="relative w-full h-fit flex flex-col"
    >
      <Entry dict={dict} />
    </div>
  );
}
