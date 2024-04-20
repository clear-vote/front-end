'use client'
import React, { useState, useContext } from 'react';
import { IContestProps, ICandidate, IElectionItem, IContest } from '@/components/custom/contests';
import { ContestDataContext } from '@/components/custom/elections'; // Import the ElectionInfoContext

/// ============================================
/// Summary
/// This file handles the "pokemon team"-style display of pinned candidates.
/// 1. Accepts the contest_data from a single election.
/// 2. Parses out a list of positions to render.
/// 3. Requests and renders the current user's pinned candidate for each position.
/// 4. Whenever a change in pinned candidates is detected, the component re-renders.***
///
/// *** see todos
///
/// Remarks
/// • This component should useContext for the filtered data. This way, re-rendering is triggered from elections.tsx.
/// • Uses interfaces from contests.tsx.
/// • user_id is present to start laying the groundwork for account-specific data.
/// • This component should useContext to get 
/// 
/// TODOs
/// • 
/// ============================================

// No need to pass contest_data as prop, it is accessible with useContext
interface PinnedCandidatesProps {
  // contest_data: IContest[];
  // user_id: number;
  // positions: string[];
  // candidates: string[];
}

const PinnedCandidates: React.FC<PinnedCandidatesProps> = () => {
  const { contestData, setContestData } = useContext(ContestDataContext);
  
  // const positions = contest_data.map((contest: IElectionItem) => contest.position);
  // const candidates = contest_data.map((contest: IElectionItem) => contest.candidates);
  return (
    <div>
      <h3>Pinned Candidates</h3>
      <ul>
        {contestData.map((contest, index) => (
          <li key={index}>{contest.position_info.title_string}</li>
        ))}
      </ul>
    </div>
  );
};

export default PinnedCandidates;