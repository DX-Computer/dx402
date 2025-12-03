import { getDictionary } from "./[lang]/dictionaries";
import Entry from "./components/Common/modules/Entry";


export default async function IndexPage() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <div dir="ltr" className="relative w-full h-fit flex flex-col">
      <Entry dict= {dict} />
    </div>
  );
}
