import Image from 'next/image'
import ScrollUp from '@/lib/scrollup'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SiteBar from '@/components/custom/sitebar'
import { SearchInput } from '@/components/custom/search-input'
import { Mail } from "lucide-react"


export default function Sandbox() {
  const data = "...";

  return (
    //Content of the about page
    <main className="min-h-screen mt-32 flex flex-col gap-16 items-center">
      <ScrollUp/>
      <section className="w-full max-w-2xl bg-card border rounded-md overflow-hidden flex flex-col items-center">
        <div className="mb-4 w-[calc(100%-2rem)] flex flex-col items-center">
        <img src="logo.svg" alt="ClearVote-logo" width = "200" height = "200"></img>
          <h1 className="text-3xl font-semibold my-8">About Us</h1>
          <p>Our goal here at Clearvote is to help the public stay 
            up-to-date during <strong>local</strong>, <strong>off-cycle</strong> elections and understand <strong>who </strong> 
            they are voting for.
          </p>
          <h1 className="text-3xl font-semibold my-8">Who We Are</h1>
          <h3>Why?</h3>
          <br></br>
          <p>
          Urban estimates for voter turnout in <strong>federal elections</strong> are around <strong>70%</strong> with 
          <strong> off-cycle elections</strong> in contests like primary elections being as low as <strong>20%</strong>. 
          Many people are interested in participating but do not, mainly because they either:
          <br></br>
          <br></br>
          <ol>
            <li><strong>1.</strong> Do not even know there is an election going on.</li>
            <li><strong>2.</strong> Don’t have the time to figure out how to participate.</li>
            <li><strong>3.</strong> Are not able to keep track of the key dates and miss the voting schedule.</li>
          </ol>
          <br></br>
            Even worse, ballots themselves tend to be vague and require busy would-be voters to read complicated 
            voter pamphlets, or to read between the lines from biased articles and news sources to figure out what the 
            people they are voting for really represent. Those who don’t opt out entirely are prone to vote for a 
            person purely on the basis of their political party and not the values they actually represent.
          </p>
          <br></br>
          <h3>So why is this a necessary problem to solve anyways?</h3>
          <br></br>
          <p>
            Off-cycle election participation correlates almost synonymously with small scale democracy, otherwise 
            known as direct democracy. This is the kind that we practice with our friends and family members every 
            day. It is the kind that is open to a greater degree of understanding and discourse than the kind you 
            see in federal elections, where talking points are boiled down to voter blocs and exist only to serve 
            a small handful of people. In it:
          <br></br><br></br>
          <ol>
            <li><strong>1.</strong> Representatives are more likely to consider their constituent’s needs.</li>
            <li><strong>2.</strong> Constituents are more likely to interact with their representatives.</li>
            <li><strong>3.</strong> Faster, more effective action can be taken in a way that best fits the needs of the community</li>
          </ol>
          <br></br>
          We believe that if people were to participate in off-cycle elections more than the federal elections, we 
          would see a revolutionary shift in power that enables communities to be more adaptable to worldly issues 
          like oppression, war, famine, and environmental challenges. And on an individual level, this would grant 
          personal agency to enable more well-intentioned innovations driven by higher ideals, rather than the trend 
          we currently see where democracies seem to be fragile, incoherent, and borderline authoritarian.
          </p>
          <br></br>
          <h3>How?</h3>
          <br></br>
          <p>
          We believe through the open-source nature and community driven nature of ClearVote, we can enhancing the political 
          agency of individuals globally on a small scale, where each “chapter” of ClearVote is catered to the needs of that 
          particular community. We aim to give people an immersive experience, where they don’t just feel like they are using 
          a service, but are contributing to the growth of something bigger than them that has purpose and impact.
          </p>
          <p>
          Doing this requires that we not only give people many options with how they chose to interact with this application, 
          but also make an application that is fun to play with and easy to participate with as a contributer, regardless of 
          their skill set. Our users are not users, they are fans. Our service makes staying up-to-date and informed on off-cycle 
          elections easy with clear instructions and alerts that tell them exactly what to do and most importantly: what the values 
          are of the candidates on their ballot.
          </p>

          <h1 className="text-3xl font-semibold my-8">Who We Are Not</h1>
          <p>
          An application like this could in theory be used for control, but we believe this isn’t possible for the main reason that 
          people are more skeptical when it comes to politics than anything else. Our primary asset is Trust. "Trust is built in inches 
          and destroyed in miles". Thus, we take every effort to design our culture, organization, and service in contrast to the following:
          <br></br>
          <br></br>
          <ol>
            <li><strong>A.</strong> Data Collectors</li>
            <li><strong>B.</strong> Political Analysts</li>
            <li><strong>C.</strong> Think Tanks</li>
            <li><strong>D.</strong> Lobbyists</li>
            <li><strong>E.</strong> All other forms of Corporate Shills</li>
          </ol>
          <br></br>
          ClearVote has style, it is personalized, it is transparent, and it is not owned by anyone. By the people, for the people!
          </p>
          <br></br>
          <Button size="lg">
            <a href="/" target="_blank">Let's Get Started!</a>
          </Button>
        </div>

      </section>


      <section>
        

      </section>


    </main>

  )}