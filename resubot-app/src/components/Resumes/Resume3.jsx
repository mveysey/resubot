// Resume.jsx
import React from 'react';
import './Resume3.scss';


const Resume3 = () => {
  return (
    <>
    <div id="drag" class="cv wrap">
    <div class="mainDetails">
      <div id="name">
        <h1>Your Name</h1>
        <h4 class="contact">Email</h4>
        <h4 class="contact">Phone Number</h4>
        <h4 class="contact">LinkedIn</h4>
        <h4 class="contact">Personal Link</h4>

      </div>
     <div class="clear"></div>
    </div>

    <div className="mainArea">
      
      <section className="break">
        <div class="sectionTitle">
          <h1>Work Experience</h1>
        </div>

        <div class="sectionContent">
          <article>
            <h2 className='position'>Student Nurse</h2>
            <h3>Northern Michigan University (NMU)</h3>
            <p class="subDetails">Jan. 2014 - Jan. 2017</p>
            <ul className='content-list'>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.
                </li>
            </ul>
          </article>

          <article>
             <h2 className='position'>Laboratory Manager</h2>
            <h3>Univerity of Colorado (CU)</h3>
            <p class="subDetails">October 2004 - December 2006</p>
            <ul className='content-list'>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.
                </li>
                <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.
                </li>
            </ul>
          </article>
        
          
        </div>
        
        
        <div class="clear"></div>
      </section>


      


      <section id="Education" className="break">
        <div class="sectionTitle">
          <h1>Education</h1>
        </div>

        <div class="sectionContent">
          <article>
            <h2>Bachelor’s of Science, Nursing</h2>
            <p class="subDetails">Northern Michigan University</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>

          </article>

        </div>
        <div class="clear"></div>
      </section>

      <section className="break">
        <div class="sectionTitle">
          <h1>Key Skills</h1>
        </div>

        <div class="sectionContent">
          <ul class="keySkills">
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
            <li>A Key Skill</li>
          </ul>
        </div>
        <div class="clear"></div>
      </section>

      
      <section className="break">
        <article>
          <div class="sectionTitle">
            <h1>Projects</h1>
          </div>

          <div class="sectionContent">
            <h2>Jin, Lei, Mogan, Jennifer, et al. </h2>
            <p>"STING/MPYS mediates host defense against listeria monocytogenes infection by regulating Ly6Chi monocyte migration." The Journal of Immunology 190.6 (2013): 2835-2843.</p> 
          </div>
          
          <div class="sectionContent">
            <h2>Knowles, Heather, Mogan, Jennifer, et al.</h2>
            <p>"Transient Receptor Potential Melastatin 2 (TRPM2) ion channel is required for innate immunity against Listeria monocytogenes." Proceedings of the National Academy of Sciences 108.28 (2011): 11578-11583.</p>
          </div>
          
          
        </article>
        <div class="clear"></div>
      </section>
      
      
      
    </div>
  </div>
    </>
  );
};

export default Resume3;
