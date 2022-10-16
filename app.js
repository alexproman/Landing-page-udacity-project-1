/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 

*/
//********************************************************************/
// Crating navigation menu by object 
//*********************************************************************/

const landingPage ={
    docFrag  : document.createDocumentFragment(), // document fragment to reduce overflow and repaint
    sections : document.querySelectorAll('section'),  // seclect all sections to loope on it
    navgationBar : document.getElementById('navbar__list'), // parent of all list will built (( ul ))
    navList(){
        landingPage.sections.forEach(section=>{                // loope on section
            const creatLi=document.createElement('li');        //  creat li
            creatLi.innerHTML=`<a class ="menu__link " href="#${section.id}">${section.dataset.nav}</a>`, // text will bulit anchor( a ) in ( li )
  
//********************************************************************/
// click event to scroll smoothly
//*********************************************************************/

  creatLi.addEventListener('click',(getSelection)=>{
      getSelection.preventDefault();
      section.scrollIntoView({
          behavior:"smooth" , block:"center"
                })
      })
      landingPage.docFrag.appendChild(creatLi);                     // appinding lists to fragment
        })
     landingPage.navgationBar.appendChild(landingPage.docFrag);     //  appinding fragment to the nav-memu
    },
}   
 //******************************************************************** */
 //         add active class to section in viewport
 //********************************************************************* */
const sections =document.getElementsByTagName('section')
// function return value of viewport
 const myView =(section)=>{
    return   section.getBoundingClientRect().top;              
}
 // function adding active claas if section in viewport 
const addMyActiveClass =(True, section )=>{
    True ? section.classList.add('your-active-class') : section.classList.remove('your-active-class');
};
// main function will add or remove active class to the section
const theActiveSection =( )=>{                               
  for ( const section of sections){ 
// condition  to add active class to section in viewport
 const viewPort = (myView(section) < 160 && myView(section) >= -270);   
   // call function of adding active class                           
  addMyActiveClass(viewPort,section);                      
  }}; 
//**************************************************************************** */
 //         add active class to listItem 
//****************************************************************************/
// function retun if section is active or not
 const sectionIsActive =(section)=>{
    return   section.classList.contains('your-active-class');          
}
// function addind active class to link if section linked with is active
const addActiveList =(True, activeLink )=>{
    True ? activeLink.classList.add('active__list') : activeLink.classList.remove('active__list');
};

// main function
const theActiveList =( )=>{                                                
  for ( const section of sections){                                        
       const activeLink = document.querySelector(`[href="#${section.id}"]`);     
 const conditional =sectionIsActive(section);                               
 addActiveList(conditional,activeLink); 
                                   
  }};
//------------------------------------------------//
// Build menu 
 window.addEventListener("load",landingPage.navList)                     
// Set sections as active
window.addEventListener('scroll', theActiveSection); 
window.addEventListener('scroll', theActiveList);   


//  button to back  top smoothy .////////////////////////////
const arrowTop = document.getElementById("arrow");
window.onscroll =()=>{
    scrollY > 700 ? arrowTop.style.display="block" : arrowTop.style.display="none";
};
arrowTop.onclick =()=>{
    scroll({top:100 , behavior:"smooth"})};
    //_______________________________________________//
