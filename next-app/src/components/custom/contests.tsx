'use client'
import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Badge } from '@/components/ui/badge'
import { PfmBadge, PfmProps } from './pfmBadge'


type ContestProps = {
  key: number
  title: string
  title_desc: string
  term_length: string
  children: ReactNode
}

export type CandidateProps = {
  key: number
  name: string
  image_source: string
  pfms: Array<PfmProps>
}

export function CandidateCard(props: CandidateProps) {
  const pfms = props.pfms.map(pfm => <PfmBadge key={pfm.key} name={pfm.name} value={pfm.value} />);
  
  return (
    <div className="flex-none bg-card elevation-1 border border-1 rounded-lg p-6 flex flex-col gap-0 items-start max-w-[calc(200px+1.5rem)]">
      <Image 
        src={ props.image_source }
        alt="candidate headshot"
        height={200}
        width={200}
        className="border rounded-sm mb-4"
      />
      <p className="text-lg font-600">{ props.name }</p>
      <div className="mt-2 flex flex-wrap gap-1 self-stretch items-start">
        {pfms}
        {/* <Badge variant="outline">
          <FontAwesomeIcon icon={faBriefcase} className="mr-1" />
          Business
        </Badge>
        <Badge variant="outline">
          <FontAwesomeIcon icon={faHammer} className="mr-1" />
          Zoning
        </Badge>
        <Badge variant="outline">
          <FontAwesomeIcon icon={faScaleBalanced} className="mr-1" />
          Reformed Courts
        </Badge> */}
      </div>
    </div>
  )
}

export function Contest(props: ContestProps) {

  return (
    <div className="flex-none bg-card elevation-1 border border-1 rounded-lg flex">
      <div className="border-border border-r flex flex-col p-6 justify-between h-[400px] w-2/5">
        <div className="flex flex-col gap-3">
          <h3>{props.title}</h3>
          <div className="flex gap-1 flex-wrap">
            <Badge>{props.term_length}</Badge>
          </div>
          <p className="text-secondary">{props.title_desc}</p>
        </div>
        <Button variant="outline" className="self-start">Learn more</Button>
      </div>
      {props.children}
      {/* <div className="w-full flex p-8"> */}
        {/* {props.children} */}
        {/* <slot name="candidates"></slot> */}
        {/* <CandidateCard /> */}
      {/* </div> */}
    </div>
  )
}