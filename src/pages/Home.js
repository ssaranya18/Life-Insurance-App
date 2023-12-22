import React from "react";
import Footer from "../components/Footer";
import './Home.css';
import TitlebarImageList from './Content';
import BasicExample from "./Content1";
function Home() {
  return (
    <div>
      <h1 className="home">Your life, our priority<br></br>insuring happiness,<br></br> securing peace.</h1>
      <div>
            <div>
                <h1 className="hello">What Is Life Insurance?</h1>
                <div>
                  <p className="welcome">Life Insurance can be defined as a contract between an insurance policy holder and an insurance company,
                     where the insurer promises to pay a sum of money in exchange for a premium, upon the death of an 
                     insured person or after a set period.
                     Life insurance is a type of insurance that pays out a lump sum or an income 
                     for the death of the insured. Life assurance is an investment product that pays out a 
                     fixed amount of money in the event of death. 
                     Life assurance is what you get when you buy life insurance.Depending on your 
                     life insurance plan, you may be able to take a loan from your policy, use it as
                      collateral for a loan, withdraw funds, receive “accelerated benefits” or cash out the policy.</p>
                      <br></br>

                      <h1 className="hello">Our Insurance Plans:</h1>
                      <TitlebarImageList/>
                      <br></br>

                     <h1 className="hello">Why is life insurance important? </h1><p className="welcome">Buying life insurance protects your spouse
                      and children from the potentially devastating financial losses that could result if something
                       happened to you. It provides financial security, helps to pay off debts, helps to pay living expenses, 
                     and helps to pay any medical or final expenses.
                     Life insurance helps your loved ones deal with the financial impact of your death. 
                     It provides them with a one-time, tax-free payment, called a death benefit. They may use the amount to:
                      replace your income to allow your family to maintain their standard of living.</p><br></br>
                      </div>
                      <BasicExample/>
            </div>
            <Footer />
        </div>
        
    </div>
    
  );
}

export default Home;