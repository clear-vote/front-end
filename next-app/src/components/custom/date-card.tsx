'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { register } from 'module';

type DateCardProps = {
  election_type: string;
  voting_start: Date;
  register_by: Date;
  voting_end: Date;
  onClick: () => void;
};

const DateCard: React.FC<DateCardProps> = ({ election_type, voting_start, register_by, voting_end, onClick }) => {
  const currentDate = new Date();
  let displayDate1: Date;
  let displayDate2: Date | null = null;
  let message1: string = "";
  let message2: string = "";
  let isDisabled: boolean = false;
  let registerLink: boolean = true;

  if (currentDate < voting_start) {
    isDisabled = true;
    message1 = "Voting period starts:";
    displayDate1 = voting_start;
  } else if (currentDate < register_by) {
    message1 = "Register to vote by:";
    displayDate1 = register_by
    message2 = "Voting period ends:"
    displayDate2 = voting_end;
  } else if (currentDate < voting_end) {
    message1 = "Voting period ends:";
    displayDate1 = voting_end;
  } else {
    message1 = "Voting period ended:";
    displayDate1 = voting_end;
    registerLink = false;
  }

  const month1: string = displayDate1.toLocaleString('default', { month: 'short' });
  const day1: string = displayDate1.getDate().toString();
  const year1: string = displayDate1.getFullYear().toString();
  let month2: string = "";
  let day2: string = "";
  let year2: string = "";
  if (displayDate2) {
    month2 = (displayDate2 as Date).toLocaleString('default', { month: 'short' });
    day2 = (displayDate2 as Date).getDate().toString();
    year2 = (displayDate2 as Date).getFullYear().toString();
  }

  return (
    <div onClick={isDisabled ? undefined : onClick} className={`cursor-pointer ${isDisabled ? 'pointer-events-none' : ''}`}>
      <div className={`w-full md:w-[320px] flex-none bg-card elevation-1 border border-1 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center ${isDisabled ? 'bg-gray-300 pointer-events-none' : ''}`}>
        <div className="flex flex-col w-full gap-1 md:w-1/2">
          <h3>{election_type.charAt(0).toUpperCase() + election_type.slice(1)} Election</h3>
          <h4>{message1}</h4>
          {registerLink && <a className="text-secondary" href="https://voter.votewa.gov/portal2023/login.aspx">Get registered here</a>}
          {displayDate2 && <h4>{message2 as string}</h4>}
        </div>
        <div className="flex flex-col items-center md:w-1/2">
          <p className="font-600">{month1}</p>
          <p className="text-2xl font-600 leading-none">{day1}</p>
          <p className="text-sm font-500 text-secondary mt-1">{year1}</p>
          {displayDate2 && (
            <>
              <p className="font-600">{month2}</p>
              <p className="text-2xl font-600 leading-none">{day2}</p>
              <p className="text-sm font-500 text-secondary mt-1">{year2}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DateCard
