import type { Meal, User, ShareDetail } from "../shared/types";
import PillContainer from "./components/PillContainer";
import "./app.css"


const App = () => {
  const dummyUsers: User[] = [
    { id: "u1", name: "user01" },
    { id: "u2", name: "user02" },
    { id: "u3", name: "user03" },
    { id: "u4", name: "user04" },
    { id: "u5", name: "user05" },
  ];

  const dummyMeal: Meal[] = [
    {
      id: "m1",
      date: "string",
      menu: "2025-12-16T10:35:41.081Z",
      mortgagee: { id: "u1", name: "user01" },
      participants: [
        { id: "u2", name: "user02" },
        { id: "u3", name: "user03" },
        { id: "u4", name: "user04" },
      ],
      total: 140000,
      is_even_share: true,
      details: [
        {
          participant: { id: "u2", name: "user02" },
          bill: 35000,
        },
        {
          participant: { id: "u2", name: "user02" },
          bill: 35000,
        },
        {
          participant: { id: "u2", name: "user02" },
          bill: 35000,
        },
      ],
    },
    {
      id: "m2",
      date: "string",
      menu: "2025-12-16T10:35:41.081Z",
      mortgagee: { id: "u1", name: "user01" },
      participants: [
        { id: "u2", name: "user02" },
        { id: "u3", name: "user03" },
        { id: "u4", name: "user04" },
      ],
      total: 110000,
      is_even_share: false,
      details: [
        {
          participant: { id: "u2", name: "user02" },
          bill: 40000,
        },
        {
          participant: { id: "u2", name: "user02" },
          bill: 35000,
        },
      ],
    },
  ];

  const mortgageeList = <ul className="mortgagee-list">
    {dummyUsers.map(
      e => (<li className={"mortgagee-" + e.id}><PillContainer key={e.id} content={e.name} /></li>)
    )}
  </ul>;

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="options">
            <button>+ thêm thành viên</button>
            <button>đặt lại</button>
          </div>
          <span className="section-title">chủ nợ</span>
          <div className="mortgagee-selection">{mortgageeList}</div>
          <span className="section-title">tất toán</span>
          <div className="summary-view">

          </div>
          <div className="details-view">

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
