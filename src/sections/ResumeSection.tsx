import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const ResumeSection: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Resume" 
          subtitle="Download my resume or view it online to learn more about my qualifications."
          center
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto bg-dark-300 p-8 rounded-lg border border-gray-800 text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full flex items-center justify-center">
            <FileText size={28} className="text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">My Resume</h3>

          <p className="text-gray-300 mb-8">
            View or download my full resume to get a comprehensive overview of my
            skills, education, work experience, and achievements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://drive.google.com/uc?export=download&id=1QYto7gCMcdh-_VRBZw-O43qKL1C1JGv-" 
              target="_blank"
              rel="noopener noreferrer"
              className="cyberpunk-btn flex items-center justify-center"
              download
            >
              <Download size={18} className="mr-2" />
              Download PDF
            </a>

            <button 
              onClick={() => setShowPreview(true)}
              className="cyberpunk-btn flex items-center justify-center"
            >
              <Eye size={18} className="mr-2" />
              Preview Resume
            </button>
          </div>
        </motion.div>
      </div>

      {/* Resume Preview Modal */}
      {showPreview && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
    onClick={() => setShowPreview(false)}
  >
    <div
      className="bg-dark-200 rounded-lg w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl max-h-[80vh] md:max-h-[90vh] overflow-hidden flex flex-col relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-800 flex justify-between items-center">
        <h3 className="text-lg sm:text-xl font-bold text-white">Resume Preview</h3>
        <button
          onClick={() => setShowPreview(false)}
          className="text-gray-400 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* PDF Preview */}
      <div className="flex-1 overflow-auto p-2 sm:p-4">
        <iframe
          src="https://drive.google.com/file/d/1QYto7gCMcdh-_VRBZw-O43qKL1C1JGv-/preview"
          className="w-full h-[60vh] md:h-[75vh] rounded-lg"
          allow="autoplay"
          title="Resume Preview"
        ></iframe>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 flex flex-col sm:flex-row gap-3 sm:justify-between">
        <button
          onClick={() => setShowPreview(false)}
          className="w-full sm:w-auto px-4 py-2 bg-dark-100 text-gray-300 rounded-md hover:bg-dark-100/80 transition-colors"
        >
          Close
        </button>
        <a
          href="https://drive.google.com/uc?export=download&id=1QYto7gCMcdh-_VRBZw-O43qKL1C1JGv-"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-4 py-2 bg-neon-blue text-white rounded-md hover:bg-neon-blue/80 transition-colors flex items-center justify-center"
          download
        >
          <Download size={18} className="mr-2" />
          Download
        </a>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default ResumeSection;


      // {showPreview && (
        /*<div className="flex-1 overflow-auto p-6">
          <iframe 
            src="https://drive.google.com/file/d/1QYto7gCMcdh-_VRBZw-O43qKL1C1JGv-/preview"
            className="w-full h-[90vh] rounded-lg"
            allow="autoplay"
          ></iframe>
        </div>*/
  //       <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
  //         <div className="bg-dark-200 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
  //           <div className="p-4 border-b border-gray-800 flex justify-between items-center">
  //             <h3 className="text-xl font-bold text-white">Resume Preview</h3>
  //             <button 
  //               onClick={() => setShowPreview(false)}
  //               className="text-gray-400 hover:text-white"
  //             >
  //               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  //               </svg>
  //             </button>
  //           </div>
            
  //           <div className="flex-1 overflow-auto p-6">
  //             <div className="bg-white rounded-lg p-8 text-black min-h-[800px]">
  //               {/* Resume content goes here */}
  //               <h1 className="text-3xl font-bold mb-2">Kundan Kumar</h1>
  //               <p className="text-gray-600 mb-4">AI Researcher | Full Stack Developer</p>
                
  //               <hr className="my-4" />
                
  //               <div className="mb-6">
  //                 <h2 className="text-xl font-bold mb-2">Education</h2>
  //                 <div className="mb-4">
  //                   <h3 className="font-bold">B.S in Data Science</h3>
  //                   <p>IIT Madras | 2023 - 2028 (Expected)</p>
  //                 </div>
  //                 <div>
  //                   <h3 className="font-bold">B.Tech in AI & DS</h3>
  //                   <p>LNCT | 2023 - 2027 (Expected)</p>
  //                 </div>
  //               </div>
                
  //               <div className="mb-6">
  //                 <h2 className="text-xl font-bold mb-2">Experience</h2>
  //                 <div className="mb-4">
  //                   <h3 className="font-bold">Branding Executive</h3>
  //                   <p>LNCT TNP | Jun 2023 - Present</p>
  //                   <ul className="list-disc list-inside ml-4 mt-2">
  //                     <li>Created social media designs and posters for campus events</li>
  //                     <li>Developed comprehensive branding strategies</li>
  //                   </ul>
  //                 </div>
  //                 <div>
  //                   <h3 className="font-bold">Graphic Designer</h3>
  //                   <p>Nallamala House, IIT Madras | Aug 2023 - Present</p>
  //                   <ul className="list-disc list-inside ml-4 mt-2">
  //                     <li>Created full video content for events and promotions</li>
  //                     <li>Designed posters, banners, and social media graphics</li>
  //                   </ul>
  //                 </div>
  //               </div>
                
  //               <div className="mb-6">
  //                 <h2 className="text-xl font-bold mb-2">Skills</h2>
  //                 <div className="grid grid-cols-2 gap-4">
  //                   <div>
  //                     <h3 className="font-bold">Languages</h3>
  //                     <p>Python, C, C++, JavaScript, SQL</p>
  //                   </div>
  //                   <div>
  //                     <h3 className="font-bold">Frameworks/Libraries</h3>
  //                     <p>React, Node.js, MongoDB, Scikit-learn, TensorFlow</p>
  //                   </div>
  //                 </div>
  //               </div>
                
  //               <div className="mb-6">
  //                 <h2 className="text-xl font-bold mb-2">Projects</h2>
  //                 <div className="mb-4">
  //                   <h3 className="font-bold">Brain Tumor Detection System</h3>
  //                   <p>Developed a CNN-based system to detect brain tumors from MRI scans</p>
  //                 </div>
  //                 <div>
  //                   <h3 className="font-bold">Rental Platform Web App</h3>
  //                   <p>Built a full-stack rental platform with authentication and real-time chat</p>
  //                 </div>
  //               </div>
                
  //               <div>
  //                 <h2 className="text-xl font-bold mb-2">Achievements</h2>
  //                 <ul className="list-disc list-inside ml-4">
  //                   <li>YIDS Hackathon – Top 6 Finalist (2023)</li>
  //                   <li>Smart India Hackathon – Cleared Internal Rounds (2023)</li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
            
  //           <div className="p-4 border-t border-gray-800 flex justify-between">
  //             <button 
  //               onClick={() => setShowPreview(false)}
  //               className="px-4 py-2 bg-dark-100 text-gray-300 rounded-md hover:bg-dark-100/80 transition-colors"
  //             >
  //               Close
  //             </button>
  //             <a 
  //               href="#"  // Add actual resume link here
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               className="px-4 py-2 bg-neon-blue text-white rounded-md hover:bg-neon-blue/80 transition-colors flex items-center"
  //               download
  //             >
  //               <Download size={18} className="mr-2" />
  //               Download
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </section>
  // 
  // 
//         )}
//     </section>
//   );
// };

// export default ResumeSection;