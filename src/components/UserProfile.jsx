import { useContext } from "react";
import { languageContext } from "../context/languageContext";

const translate = {
      id: {
            vi: "Mã định danh",
            en: "Id",
      },
      name: {
            vi: "Họ tên",
            en: "Fullname",
      },
};
export default function UserProfile({ id, name }) {
      const language = useContext(languageContext);


      return (
            <div>
                  {/* <p>{language === "vi" ? "Mã định danh" : "ID"}: {id}</p> */}
                  {/* <p>{language === "vi" ? "Họ tên" : "Fullname"}: {name}</p> */}
                  <p>{translate["id"][language]} {id}</p>
                  <p>{translate["name"][language]} {name}</p>
            </div>
      )
}
