'use client'

import { JSX, useState } from "react"
import DateCard from "./date-card"
import { Separator } from "@radix-ui/react-separator"
import Contests from "./contests"
import contestData from '@/lib/data/contestData.json'

const Elections = () => {
    const [lastClickedId, setLastClickedId] = useState(2);

    const handleDateCardClick = (id: any) => {
        setLastClickedId(id);
    };

    return (
        <div className="w-full">
            <h3 className="text-white">Dates and Deadlines</h3>
            <div className="scrolling-wrapper overflow-x-scroll py-4">
                <div className="flex flex-nowrap gap-4">
                    {contestData.slice().reverse().map((election, index) => (
                        <DateCard
                            key={election.election_id}
                            election_type={election.election_type}
                            voting_start={new Date(`${String(election.voting_start).replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}`)}
                            register_by={new Date(`${String(election.register_by).replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}`)}
                            voting_end={new Date(`${String(election.voting_end).replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}`)}
                            onClick={() => handleDateCardClick(election.election_id)}
                        />
                    ))}
                </div>
            </div>
            <Separator />
            <Contests
                contest_data={contestData}
                election_id={lastClickedId}
            />
        </div>
    );
};

export default Elections;