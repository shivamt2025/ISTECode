
import React,{useState} from 'react';
import Topbar from '@/components/Topbar/Topbar';
import {render} from 'react-dom';
import Workspace from '@/components/Workspace/Workspace';
import MyCalendar from '@/components/Calendar/MyCalendar';
import{Routes,Route,BrowserRouter as Router,useNavigate} from 'react-router-dom';

import QOTW from'@/components/QOTW/QOTW';
import Qotwbelowpage from'@/components/Qotwbelowpage/Qotwbelowpage';
import Qotwbelowpage_2 from'@/components/Qotwbelowpage/Qotwbelowpage_2';
import { problems } from '@/mockProblems/problems';
type ProblemPageProps = {
    
};


const ProblemPage:React.FC<ProblemPageProps> = () => {
    const ReactCalendar=()=>{
        const[date,setDate]=useState(new Date());
    
    
    };
    
    return (
        <div>
            <div>
        <Topbar />
       
      <MyCalendar/>
       <div className=' styleText '>Prior Questions</div>
       <div className='lineStyle'></div>
        <QOTW problem={problems[2]}/>
        
        <Qotwbelowpage problem={problems[1]}/>
        <Qotwbelowpage_2 problem={problems[0]}/>
        
        </div>

        
    </div>

    );
};


export default ProblemPage;