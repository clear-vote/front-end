'use client'

import { Badge } from '../../ui/badge'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHammer, faScaleBalanced, faSmile, faShield, faBus, faRoad } from '@fortawesome/free-solid-svg-icons'

export type PfmProps = {
  key: number
  name: string
  value: number
}

// const mapping = [
//   {
//     "pfm": "Business",
//     "icon": {
//       "name": "briefcase",
//       "family": "classic",
//       "style": "solid,"
//     }
//   },
//   {
//     "pfm": "Zoning",
//     "icon": {
//       "name": "hammer",
//       "family": "classic",
//       "style": "solid,"
//     }
//   },
//   {
//     "pfm": "Reformed Courts",
//     "icon": {
//       "name": "scale-balanced",
//       "family": "classic",
//       "style": "solid,"
//     }

//   }
// ];

function getIcon(name: string) {
  let faIcon = <FontAwesomeIcon icon={faSmile} className="mr-1" />;
  if (name === "Business") {
    faIcon = <FontAwesomeIcon icon={faBriefcase} className="mr-1" />;
  } else if (name === "Zoning") {
    faIcon = <FontAwesomeIcon icon={faHammer} className="mr-1" />;
  } else if (name === "Reformed Courts") {
    faIcon = <FontAwesomeIcon icon={faScaleBalanced} className="mr-1" />;
  } else if (name === "Security") {
    faIcon = <FontAwesomeIcon icon={faShield} className="mr-1" />;
  } else if (name === "Transit") {
    faIcon = <FontAwesomeIcon icon={faBus} className="mr-1" />;
  } else if (name === "Infrastructure") {
    faIcon = <FontAwesomeIcon icon={faRoad} className="mr-1" />;
  }

  return faIcon;
}

export function PfmBadge(props: PfmProps) {
  return (
    <Badge variant="outline" >
      {getIcon(props.name)}
      {props.name}
    </Badge>
  )
}