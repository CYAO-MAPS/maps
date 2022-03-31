import React from 'react';
import BenefitsCard from '../components/BenefitsCard';
import './Benefits.css'
import Benefit_Cost from '../graphics/benefit_cost.png';
import Benefit_Box from '../graphics/benefit_box.png';
import Benefit_Fuel from '../graphics/benefit_fuel.png';
import Benefit_Int_Mod from '../graphics/benefit_int_mod.png';
import Benefit_Sustainble from '../graphics/benefit_sustainable.png';
import Benefit_Intelligent from '../graphics/benefit_intelligent.png';
// import Benefit_ from '../graphics/benefit_.svg';



function Benefits() {
    return (
        <div className='benefits-container'>
            <h2 className='benefits-title'>Multiple benefits. One solution.</h2>
            <div className = "benefits-content-container">
                <BenefitsCard
                    image = {Benefit_Box}
                    title = "Turnkey"
                    summary = {["Single connection installation. Eliminate grid dependency, ", <strong>gain resiliency. </strong>, <br/>, "Microgrid-in-a-box."]}
                    text = "Microgrid functionality permits the generation of electricity with or without local grid infrastructure. This functionality enables a solution for remote and underdeveloped communities to access clean electricity with the microgrid as the backbone infrastructure. The onsite microgrid functionality also provides energy security to grid connected customers by ensuring continuous electricity supply regardless of prolonged grid outages from natural disasters and cyber-attacks. <br><br> The MPP operates as a full microgrid-in-a-box enabling economic and social benefit to remote and underdeveloped communities, enabling a homogenous solution allowing for greater scalability and the ability to replicate the solution for future customer’s global footprint, and provide customers with the peace of mind that they are fully protected in the event grid outages regardless of length or cause."
                />
                <BenefitsCard
                    image = {Benefit_Cost}
                    title = "Cost Certainty"
                    summary = {["Mitigate the rising costs of electricity.",<br/>, <strong>Zero capital cost </strong>, "to deploy."]}
                    text = "The forced adoption of costly electrical generation technologies will cause local electricity prices to skyrocket and accelerate corporate emigration and the offshoring of emissions to countries using cheaper, polluting electricity generation as companies move their operations to remain competitive. <br><br> The MPP brings competitive baseload like economics with dispatchable, peaking-type generation capability to solve the intermittency problem of renewables without the cost premium of other proposed solutions. The MPP delivers green power with significant cost savings both behind-the-meter and at grid scale."
                />
                <BenefitsCard
                    image = {Benefit_Sustainble}
                    title = "Emissions Control"
                    summary = {[<strong>Net-zero emissions. </strong>, <br/>, "Sustainable from cradle-to-grave."]}
                    text = "Green electricity must be generated from solution that are sustainable from cradle to grave. This includes eliminating the need for environmentally damaging mining practices to extract exotic and rare-earth materials for manufacturing, eliminating GHG emissions during running, and preventing end of life landfill and toxic waste. <br><br>                     The MPP is a complete environmentally sustainable solution through its life cycle. It is built primarily with readily available materials. During the running life, the solution is environmentally sustainable on two fronts. First, it provide carbon neutral electricity generation. Second, it provide a useful application of waste streams that can be converted into biofuels instead of producing potent GHG emissions when decomposing in landfills or dangerously polluting waterways. At end of life, the MPP is fully recyclable and does not contribute to landfill or toxic waste."
                />
                <BenefitsCard
                    image = {Benefit_Intelligent}
                    title = "Intelligent"
                    summary = {["AI enhanced autonomous running and performance optimization. ", <br/>, <strong> Zero maintenance.</strong>]}
                    text = "A solution with built in smarts can be optimized to support intermittent renewables, optimize running across all available sources, and provide critical self diagnostics to eliminate customer onsite inspection or maintenance requirements. <br><br> MAPS’ internally developed AI enabled smart controller allows for the optimization of electricity sources and utilization to minimize total cost of operation, sell electricity to grid, ensure the customer is off grid during peak pricing, and perform smart diagnostics and performance monitoring to eliminate onsite maintenance and inspection requirements. The extraction of aggregated electricity data from the customer and bilaterally with the grid can be realized to optimize running performance, protect the customer from grid disruptions, and heuristic learning of the customer’s electricity patterns to anticipate their needs. The integrated smarts also facilitates the seamless transition between fuel sources and generation sources to provide the smart microgrid functionality."
                />
                <BenefitsCard
                    image = {Benefit_Fuel}
                    title = "Fuel Flexible"
                    summary = {[<strong>Zero transition costs. </strong>, <br/>, "Reduce emissions today.", <br/>, "Lead emissions reduction tomorrow."]}
                    text = "Fuel flexibility enables net zero emissions running on any light biofuel or green hydrogen in any mix. This flexibility enables the immediate deployment of the technology into any global market, upgrading to different fuels over time as desired without additional capital cost. The Advanced Common Combustor to Expand Local Energy Resources and Abate Total Emissions (ACCELERATE) system delivers the benefits of fuel flexibility to the MPP. This flexibility accelerate adoption, accelerate emission reduction, and accelerate customer savings."
                />
                <BenefitsCard
                    image = {Benefit_Int_Mod}
                    title = "Scalable"
                    summary ={["Integrated & modular. ", <br/>, "Easy to ", <strong>deploy anywhere</strong>,", ", <br/>, "including remote locations."]}
                    text = "By providing a completely integrated solution, the customer does not have to worry about any ancillary equipment or understanding of how the systems perform together. Equipment modularity provides a cost-effective capability to increase the size of the technology deployment to meet the customer’s rise in electricity needs.  It also simplifies servicing the equipment and allows these activities to be performed while the unit continues to run. <br><br> The MPP provides an integrated solution for the customer providing primary, continuous backup power, and uninterrupted power supply functionality eliminating the need for all other costly ancillary equipment.  The modularity of the MPP allows for an increase in the deployment size to the customer while leveraging the existing deployed hardware. Servicing of the MPP will be seamlessly performed by externally disconnecting the old equipment and swapping in the replacement parts."
                />
            </div>
        </div>
    );
}

export default Benefits;