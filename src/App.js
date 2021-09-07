import "./styles.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { subMonths } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";

export default function App() {
  const [state, setState] = useState([
    {
      startDate: subMonths(new Date(), 1),
      endDate: new Date(),
      key: "selection"
    }
  ]);
  console.log("state", state);

  return (
    <div className="App">
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="vertical"
      />
      ;
    </div>
  );
}
