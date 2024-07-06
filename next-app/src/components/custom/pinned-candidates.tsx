'use client'
import React, { useState, useContext } from 'react';
import { IPositionInfo } from '@/components/custom/contests';
import { ElectionInfoContext } from '@/components/custom/elections'; // Import the ElectionInfoContext

/// ============================================
/// Summary
/// This file handles the "pokemon team"-style display of pinned candidates.
/// 1. Accepts the contest_data from a single election.
/// 2. Parses out a list of positions to render.
/// 3. Requests and renders the current user's pinned candidate for each position.
/// 4. Whenever a change in pinned candidates is detected, the component re-renders.***
///
/// *** this happens when the current user's selection changes
///
/// Remarks
/// • This component should useContext for the filtered data. This way, re-rendering is triggered from elections.tsx.
/// • Uses interfaces from contests.tsx.
/// • user_id is present to start laying the groundwork for account-specific data.
/// • This component should useContext to get 
/// 
/// TODOs
/// • Render! Render! Render!
/// ============================================

// No need to pass contest_data as prop, it is accessible with useContext
interface PinnedCandidatesProps {
  // contest_data: IContest[];
  // user_id: number;
  // positions: string[];
  // candidates: string[];
}

interface ICandidateSlotProps {
  position_info: IPositionInfo;
}

// This is temporary. Please be temporary. God forbid this code be permanent.
// Somehow needs to integrate with contestData.json.
const userData = {
  user_id: 1,
  elections: [
    {
      election_id: 1,
      pins: [
        {
          position: 'County Assessor',
          candidate: 'John Wilson'
        },
        {
          position: 'County Director of Elections',
          candidate: 'Julie Wise'
        },
        {
          position: 'City Council',
          candidate: 'Rob Saka'
        }
      ]
    }
  ]
};

const PinnedCandidates: React.FC<PinnedCandidatesProps> = () => {
  const { electionData, selectedElectionId } = useContext(ElectionInfoContext);

  // TODO: should probably just make a helper function for this
     // Ensure electionData is loaded and not empty
  if (!electionData || electionData.length === 0) {
      return <div>Loading...</div>; // Or any other placeholder content
  }
  
  // Filter the election data to find the matching election
  const filteredElections = electionData.filter(election => election.election_id === selectedElectionId);
  
  // Check if there is at least one election that matches the selected ID
  if (filteredElections.length === 0 || !filteredElections[0].contests) {
        return <div>No contests found for the selected election.</div>;
  }
  
  const contestData = filteredElections[0].contests;
  
  // const positions = contest_data.map((contest: IElectionItem) => contest.position);
  // const candidates = contest_data.map((contest: IElectionItem) => contest.candidates);
  return (
    <div className="my-8">
    <h3>Pinned Candidates</h3>
    <div className="overflow-x-scroll">
      
      <ul className="flex gap-4 mt-4">
        {contestData.map((contest, index) => (
          <li key={index}>
            <CandidateSlot position_info={contest.position_info} />
            {/* {contest.position_info.title_string} */}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

function CandidateSlot({position_info}: ICandidateSlotProps) {
  console.log(position_info);
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <div className="border rounded-lg border-dashed bg-disabled w-[242px] h-[313px]">

      </div>

      <h4 className="capitalize">{position_info.title_string}</h4>
      <p>Chosen candidate</p>
    </div>
  );
}

export default PinnedCandidates;