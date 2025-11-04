import { useState, useEffect } from 'react';

// Comprehensive placement test data - would come from API in production
const COMPREHENSIVE_TEST = {
  title: "Comprehensive Placement Test (Grades 6-12)",
  totalTime: 1200, // 20 minutes total
  sections: [
    {
      id: 'math',
      name: 'Mathematics',
      description: 'Arithmetic, Algebra, Geometry',
      timeAllocation: 1200, // 20 minutes
      questions: [
        {
          id: 'math-1',
          question: "What is 15% of 200?",
          options: [
            { id: 'a', text: "20" },
            { id: 'b', text: "25" },
            { id: 'c', text: "30" },
            { id: 'd', text: "35" }
          ]
        },
        {
          id: 'math-2',
          question: "Solve for x: 2x + 5 = 15",
          options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "5" },
            { id: 'c', text: "7" },
            { id: 'd', text: "10" }
          ]
        },
        {
          id: 'math-3',
          question: "What is the area of a rectangle with length 8 and width 5?",
          options: [
            { id: 'a', text: "13" },
            { id: 'b', text: "26" },
            { id: 'c', text: "40" },
            { id: 'd', text: "45" }
          ]
        },
        {
          id: 'math-4',
          question: "If a train travels 60 miles in 1.5 hours, what is its average speed?",
          options: [
            { id: 'a', text: "30 mph" },
            { id: 'b', text: "40 mph" },
            { id: 'c', text: "45 mph" },
            { id: 'd', text: "90 mph" }
          ]
        },
        {
          id: 'math-5',
          question: "What is 3/4 expressed as a decimal?",
          options: [
            { id: 'a', text: "0.25" },
            { id: 'b', text: "0.5" },
            { id: 'c', text: "0.75" },
            { id: 'd', text: "1.33" }
          ]
        },
        {
          id: 'math-6',
          question: "Which of the following is a prime number?",
          options: [
            { id: 'a', text: "15" },
            { id: 'b', text: "17" },
            { id: 'c', text: "21" },
            { id: 'd', text: "27" }
          ]
        },
        {
          id: 'math-7',
          question: "What is the value of 2³?",
          options: [
            { id: 'a', text: "6" },
            { id: 'b', text: "8" },
            { id: 'c', text: "9" },
            { id: 'd', text: "12" }
          ]
        },
        {
          id: 'math-8',
          question: "Solve: √64 = ?",
          options: [
            { id: 'a', text: "6" },
            { id: 'b', text: "8" },
            { id: 'c', text: "16" },
            { id: 'd', text: "32" }
          ]
        }
      ]
    },
    {
      id: 'ela',
      name: 'English Language Arts',
      description: 'Reading Comprehension, Grammar, Vocabulary',
      timeAllocation: 1500, // 25 minutes
      questions: [
        {
          id: 'ela-1',
          question: "Which sentence is grammatically correct?",
          options: [
            { id: 'a', text: "Her and I went to the store." },
            { id: 'b', text: "She and I went to the store." },
            { id: 'c', text: "Her and me went to the store." },
            { id: 'd', text: "She and me went to the store." }
          ]
        },
        {
          id: 'ela-2',
          question: "What is the meaning of 'ubiquitous'?",
          options: [
            { id: 'a', text: "Rare and unusual" },
            { id: 'b', text: "Present everywhere" },
            { id: 'c', text: "Very old" },
            { id: 'd', text: "Confusing" }
          ]
        },
        {
          id: 'ela-3',
          question: "Identify the verb in this sentence: 'The cat quickly ran across the street.'",
          options: [
            { id: 'a', text: "cat" },
            { id: 'b', text: "quickly" },
            { id: 'c', text: "ran" },
            { id: 'd', text: "street" }
          ]
        },
        {
          id: 'ela-4',
          question: "Which word is a synonym for 'difficult'?",
          options: [
            { id: 'a', text: "Easy" },
            { id: 'b', text: "Challenging" },
            { id: 'c', text: "Simple" },
            { id: 'd', text: "Pleasant" }
          ]
        },
        {
          id: 'ela-5',
          question: "What type of figurative language is 'The stars danced in the sky'?",
          options: [
            { id: 'a', text: "Simile" },
            { id: 'b', text: "Metaphor" },
            { id: 'c', text: "Personification" },
            { id: 'd', text: "Hyperbole" }
          ]
        },
        {
          id: 'ela-6',
          question: "Which punctuation mark is missing? 'What time is it'",
          options: [
            { id: 'a', text: "Period (.)" },
            { id: 'b', text: "Question mark (?)" },
            { id: 'c', text: "Exclamation point (!)" },
            { id: 'd', text: "Comma (,)" }
          ]
        },
        {
          id: 'ela-7',
          question: "What is the main idea of a paragraph called?",
          options: [
            { id: 'a', text: "Supporting detail" },
            { id: 'b', text: "Topic sentence" },
            { id: 'c', text: "Conclusion" },
            { id: 'd', text: "Introduction" }
          ]
        },
        {
          id: 'ela-8',
          question: "Choose the correctly spelled word:",
          options: [
            { id: 'a', text: "Occurance" },
            { id: 'b', text: "Occurence" },
            { id: 'c', text: "Occurrence" },
            { id: 'd', text: "Ocurrence" }
          ]
        }
      ]
    },
    {
      id: 'science',
      name: 'Science',
      description: 'Biology, Chemistry, Physics, Earth Science',
      timeAllocation: 1200, // 20 minutes
      questions: [
        {
          id: 'sci-1',
          question: "What is the chemical symbol for water?",
          options: [
            { id: 'a', text: "H2O" },
            { id: 'b', text: "CO2" },
            { id: 'c', text: "O2" },
            { id: 'd', text: "N2" }
          ]
        },
        {
          id: 'sci-2',
          question: "Which planet is known as the Red Planet?",
          options: [
            { id: 'a', text: "Venus" },
            { id: 'b', text: "Mars" },
            { id: 'c', text: "Jupiter" },
            { id: 'd', text: "Saturn" }
          ]
        },
        {
          id: 'sci-3',
          question: "What is the process by which plants make their food?",
          options: [
            { id: 'a', text: "Respiration" },
            { id: 'b', text: "Photosynthesis" },
            { id: 'c', text: "Digestion" },
            { id: 'd', text: "Transpiration" }
          ]
        },
        {
          id: 'sci-4',
          question: "What is the smallest unit of life?",
          options: [
            { id: 'a', text: "Atom" },
            { id: 'b', text: "Molecule" },
            { id: 'c', text: "Cell" },
            { id: 'd', text: "Organ" }
          ]
        },
        {
          id: 'sci-5',
          question: "What force pulls objects toward the center of the Earth?",
          options: [
            { id: 'a', text: "Magnetism" },
            { id: 'b', text: "Friction" },
            { id: 'c', text: "Gravity" },
            { id: 'd', text: "Inertia" }
          ]
        },
        {
          id: 'sci-6',
          question: "Which gas do humans exhale?",
          options: [
            { id: 'a', text: "Oxygen" },
            { id: 'b', text: "Nitrogen" },
            { id: 'c', text: "Carbon Dioxide" },
            { id: 'd', text: "Helium" }
          ]
        },
        {
          id: 'sci-7',
          question: "What are the three states of matter?",
          options: [
            { id: 'a', text: "Hot, warm, cold" },
            { id: 'b', text: "Solid, liquid, gas" },
            { id: 'c', text: "Big, medium, small" },
            { id: 'd', text: "Fast, medium, slow" }
          ]
        },
        {
          id: 'sci-8',
          question: "What type of energy does a moving car have?",
          options: [
            { id: 'a', text: "Potential energy" },
            { id: 'b', text: "Chemical energy" },
            { id: 'c', text: "Kinetic energy" },
            { id: 'd', text: "Nuclear energy" }
          ]
        }
      ]
    },
    {
      id: 'social-studies',
      name: 'Social Studies',
      description: 'History, Geography, Civics',
      timeAllocation: 1200, // 20 minutes
      questions: [
        {
          id: 'ss-1',
          question: "Who was the first President of the United States?",
          options: [
            { id: 'a', text: "Thomas Jefferson" },
            { id: 'b', text: "George Washington" },
            { id: 'c', text: "Abraham Lincoln" },
            { id: 'd', text: "Benjamin Franklin" }
          ]
        },
        {
          id: 'ss-2',
          question: "Which document declared the American colonies' independence from Britain?",
          options: [
            { id: 'a', text: "The Constitution" },
            { id: 'b', text: "The Bill of Rights" },
            { id: 'c', text: "The Declaration of Independence" },
            { id: 'd', text: "The Magna Carta" }
          ]
        },
        {
          id: 'ss-3',
          question: "What are the three branches of the U.S. government?",
          options: [
            { id: 'a', text: "Federal, State, Local" },
            { id: 'b', text: "Legislative, Executive, Judicial" },
            { id: 'c', text: "President, Congress, Courts" },
            { id: 'd', text: "Democrat, Republican, Independent" }
          ]
        },
        {
          id: 'ss-4',
          question: "What is the capital of the United States?",
          options: [
            { id: 'a', text: "New York City" },
            { id: 'b', text: "Los Angeles" },
            { id: 'c', text: "Washington, D.C." },
            { id: 'd', text: "Philadelphia" }
          ]
        },
        {
          id: 'ss-5',
          question: "Which ocean is on the west coast of the United States?",
          options: [
            { id: 'a', text: "Atlantic Ocean" },
            { id: 'b', text: "Pacific Ocean" },
            { id: 'c', text: "Indian Ocean" },
            { id: 'd', text: "Arctic Ocean" }
          ]
        },
        {
          id: 'ss-6',
          question: "In what year did World War II end?",
          options: [
            { id: 'a', text: "1918" },
            { id: 'b', text: "1939" },
            { id: 'c', text: "1945" },
            { id: 'd', text: "1950" }
          ]
        },
        {
          id: 'ss-7',
          question: "What is an economic system where private individuals own businesses?",
          options: [
            { id: 'a', text: "Socialism" },
            { id: 'b', text: "Capitalism" },
            { id: 'c', text: "Communism" },
            { id: 'd', text: "Feudalism" }
          ]
        },
        {
          id: 'ss-8',
          question: "Which continent is the largest by land area?",
          options: [
            { id: 'a', text: "Africa" },
            { id: 'b', text: "North America" },
            { id: 'c', text: "Asia" },
            { id: 'd', text: "Europe" }
          ]
        }
      ]
    }
  ]
};

export default function PlacementTest() {
  // Test state
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [progressedQuestions, setProgressedQuestions] = useState(new Set());
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [completedSections, setCompletedSections] = useState(new Set());
  const [timeRemaining, setTimeRemaining] = useState(COMPREHENSIVE_TEST.totalTime);
  const [isTestActive, setIsTestActive] = useState(true);
  const [showReviewScreen, setShowReviewScreen] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showFinishSectionModal, setShowFinishSectionModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (!isTestActive || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setIsTestActive(false);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTestActive, isSubmitted]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Get time color - always black
  const getTimeColor = () => {
    return '#000000'; // black
  };

  const currentSection = COMPREHENSIVE_TEST.sections[currentSectionIndex];
  const currentQuestion = currentSection.questions[currentQuestionIndex];
  const totalSections = COMPREHENSIVE_TEST.sections.length;
  
  // Calculate total questions across all sections
  const totalQuestions = COMPREHENSIVE_TEST.sections.reduce((sum, section) => sum + section.questions.length, 0);
  const answeredCount = progressedQuestions.size;
  const progress = (answeredCount / totalQuestions) * 100;
  
  // Current section progress
  const sectionAnsweredCount = currentSection.questions.filter(q => progressedQuestions.has(q.id)).length;
  const sectionProgress = (sectionAnsweredCount / currentSection.questions.length) * 100;

  // Answer handlers
  const handleSelectAnswer = (questionId, optionId) => {
    setAnswers(prev => {
      // If clicking the same answer, unselect it
      if (prev[questionId] === optionId) {
        const newAnswers = { ...prev };
        delete newAnswers[questionId];
        return newAnswers;
      }
      // Otherwise, select the new answer
      return {
        ...prev,
        [questionId]: optionId
      };
    });
    
    // Remove from skipped questions when answered
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      newSet.delete(questionId);
      return newSet;
    });
  };

  const handleFlagQuestion = (questionId) => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  // Navigation handlers
  const handleSkip = () => {
    const currentQuestionId = currentSection.questions[currentQuestionIndex].id;
    
    // Remove answer if one was selected
    setAnswers(prev => {
      const newAnswers = { ...prev };
      delete newAnswers[currentQuestionId];
      return newAnswers;
    });
    
    // Mark current question as progressed and skipped
    setProgressedQuestions(prev => new Set([...prev, currentQuestionId]));
    setFlaggedQuestions(prev => new Set([...prev, currentQuestionId]));
    
    // Move to next question or handle section end
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // On last question - find first unanswered question
      const firstUnansweredIndex = currentSection.questions.findIndex(q => answers[q.id] === undefined);
      if (firstUnansweredIndex !== -1) {
        setCurrentQuestionIndex(firstUnansweredIndex);
      }
    }
  };

  const handleNext = () => {
    const currentQuestionId = currentSection.questions[currentQuestionIndex].id;
    
    // Mark current question as progressed
    setProgressedQuestions(prev => new Set([...prev, currentQuestionId]));
    
    // Remove from skipped questions if it was answered
    if (answers[currentQuestionId] !== undefined) {
      setFlaggedQuestions(prev => {
        const newSet = new Set(prev);
        newSet.delete(currentQuestionId);
        return newSet;
      });
    }
    
    // Check if all questions in section are answered
    const allSectionQuestionsAnswered = currentSection.questions.every(q => answers[q.id] !== undefined);
    
    if (allSectionQuestionsAnswered) {
      // All answered - show finish modal regardless of which question we're on
      if (currentSectionIndex < totalSections - 1) {
        setShowFinishSectionModal(true);
      } else {
        // Last section - show submit test modal
        handleSubmitTest();
      }
    } else {
      // Find the closest skipped or unanswered question
      // Search forward from current position + 1
      let nextQuestionIndex = -1;
      
      // First, search from current position forward
      for (let i = currentQuestionIndex + 1; i < currentSection.questions.length; i++) {
        const q = currentSection.questions[i];
        if (answers[q.id] === undefined) {
          nextQuestionIndex = i;
          break;
        }
      }
      
      // If not found forward, wrap around and search from beginning
      if (nextQuestionIndex === -1) {
        for (let i = 0; i < currentQuestionIndex; i++) {
          const q = currentSection.questions[i];
          if (answers[q.id] === undefined) {
            nextQuestionIndex = i;
            break;
          }
        }
      }
      
      // Navigate to the found question
      if (nextQuestionIndex !== -1) {
        setCurrentQuestionIndex(nextQuestionIndex);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentSectionIndex > 0) {
      // Go to previous section's last question
      const newSectionIndex = currentSectionIndex - 1;
      setCurrentSectionIndex(newSectionIndex);
      setCurrentQuestionIndex(COMPREHENSIVE_TEST.sections[newSectionIndex].questions.length - 1);
    }
  };

  const confirmFinishSection = () => {
    setShowFinishSectionModal(false);
    // Mark current section as completed
    setCompletedSections(prev => new Set([...prev, currentSectionIndex]));
    // Move directly to next section
    const newSectionIndex = currentSectionIndex + 1;
    setCurrentSectionIndex(newSectionIndex);
    setCurrentQuestionIndex(0);
  };

  const handleGoToQuestion = (sectionIndex, questionIndex) => {
    setCurrentSectionIndex(sectionIndex);
    setCurrentQuestionIndex(questionIndex);
    setShowReviewScreen(false);
  };

  const handleReviewAnswers = () => {
    setShowReviewScreen(true);
  };

  const handleSubmitTest = () => {
    setShowSubmitModal(true);
  };

  const confirmSubmit = () => {
    setIsSubmitted(true);
    setIsTestActive(false);
    setShowSubmitModal(false);
    // In production, submit answers to API here
    console.log('Test submitted:', answers);
  };

  const handleAutoSubmit = () => {
    setIsSubmitted(true);
    // In production, submit answers to API here
    console.log('Test auto-submitted (time expired):', answers);
  };

  const handleExit = () => {
    setShowExitModal(true);
  };

  const confirmExit = () => {
    // In production, save progress to API
    console.log('Test exited, progress saved');
    setShowExitModal(false);
  };

  // Test completion screen
  if (isSubmitted) {
    // Calculate performance feedback for each section (randomized for demo since we don't track correct answers)
    const getSectionFeedback = (sectionId, sectionIndex) => {
      const section = COMPREHENSIVE_TEST.sections.find(s => s.id === sectionId);
      const sectionQuestions = section.questions.map(q => q.id);
      const answeredCount = sectionQuestions.filter(id => answers[id] !== undefined).length;
      
      // Simulate varied performance (in production, this would be based on actual correct answers)
      const seed = sectionIndex * 37; // Use section index to create variation
      const simulatedPercentage = 30 + ((seed % 60) + (answeredCount % 30)); // Random range 30-90%
      
      const highMessages = [
        { text: "You've absolutely nailed this! 🌟", emoji: "🎯" },
        { text: "Outstanding! You're a natural at this! 🔥", emoji: "⭐" },
        { text: "Impressive skills! Keep up the amazing work! 💫", emoji: "🏆" }
      ];
      
      const goodMessages = [
        { text: "Great foundation! Let's build on it! 🚀", emoji: "💪" },
        { text: "You're on the right track! Ready to soar! ✨", emoji: "🌟" },
        { text: "Solid skills! Let's take them to the next level! 🎯", emoji: "👍" }
      ];
      
      const developingMessages = [
        { text: "Good start! We'll strengthen these skills together! 💪", emoji: "🌱" },
        { text: "You've got the basics! Time to grow! 🌿", emoji: "📚" },
        { text: "Nice progress! Let's keep building! 🔨", emoji: "💡" }
      ];
      
      const foundationMessages = [
        { text: "Let's work on these skills together! 🎯", emoji: "📖" },
        { text: "We'll build strong foundations here! 🏗️", emoji: "🎓" },
        { text: "Exciting opportunity to grow! Let's do this! 🌟", emoji: "🚀" }
      ];
      
      let messageArray;
      if (simulatedPercentage >= 75) {
        messageArray = highMessages;
      } else if (simulatedPercentage >= 55) {
        messageArray = goodMessages;
      } else if (simulatedPercentage >= 35) {
        messageArray = developingMessages;
      } else {
        messageArray = foundationMessages;
      }
      
      // Use section index to pick a consistent message for each section
      return messageArray[sectionIndex % messageArray.length];
    };

    // Calculate overall level based on answers (capped at Level 4 for placement)
    // In production, this would be based on correct answers from API
    const totalAnswered = Object.keys(answers).length;
    const percentage = (totalAnswered / totalQuestions) * 100;
    
    // Placement assigns Level 1-4 max, Levels 5-10 earned through mastery work
    let assignedLevel;
    if (percentage >= 90) assignedLevel = 4;      // High proficiency → Level 4 (max placement)
    else if (percentage >= 60) assignedLevel = 3; // Above average → Level 3
    else if (percentage >= 30) assignedLevel = 2; // Below average → Level 2
    else assignedLevel = 1;                       // Foundational → Level 1

    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f9fafb',
        padding: '40px'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '1100px', width: '100%' }}>
          <div style={{ 
            fontSize: '80px', 
            marginBottom: '20px',
            animation: 'celebrate 0.6s ease-out'
          }}>
            🎉
          </div>
          <h1 style={{ 
            fontSize: '42px', 
            marginBottom: '10px',
            fontWeight: 'bold',
            color: '#121214'
          }}>
            Placement Complete!
          </h1>
          <p style={{ 
            fontSize: '18px', 
            marginBottom: '40px',
            lineHeight: '1.6',
            color: '#4b5563'
          }}>
            Here's where your learning journey begins 🌟
          </p>

          {/* Two Column Layout */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 400px',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {/* Section Feedback */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '30px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              textAlign: 'left'
            }}>
              <h3 style={{ 
                fontSize: '20px', 
                marginBottom: '24px',
                fontWeight: '600',
                color: '#121214',
                textAlign: 'center'
              }}>
                Your Subject Insights
              </h3>
              {COMPREHENSIVE_TEST.sections.map((section, index) => {
                const feedback = getSectionFeedback(section.id, index);
                const isLast = index === COMPREHENSIVE_TEST.sections.length - 1;
                return (
                  <div key={section.id} style={{ 
                    marginBottom: isLast ? '0' : '20px',
                    paddingBottom: isLast ? '0' : '20px',
                    borderBottom: isLast ? 'none' : '1px solid #e5e7eb'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px'
                    }}>
                      <span style={{ fontSize: '24px' }}>{feedback.emoji}</span>
                      <span style={{ fontSize: '16px', fontWeight: '600', color: '#121214' }}>
                        {section.name}
                      </span>
                    </div>
                    <p style={{ 
                      fontSize: '15px', 
                      color: '#4b5563',
                      margin: '0 0 0 36px',
                      lineHeight: '1.5'
                    }}>
                      {feedback.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Level Result */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '40px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ 
                  fontSize: '18px', 
                  marginBottom: '16px',
                  fontWeight: '500',
                  color: '#4b5563'
                }}>
                  Your Starting Level
                </div>
                <div style={{ 
                  fontSize: '72px', 
                  fontWeight: 'bold',
                  color: '#121214',
                  marginBottom: '16px'
                }}>
                  {assignedLevel}
                </div>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6b7280',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  Complete challenges to build mastery and level up! 🚀
                </p>
              </div>
              
              <a 
                href="/"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '16px',
                  marginTop: '30px',
                  backgroundColor: '#121214',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Go to Your Dashboard
              </a>
            </div>
          </div>
          <style>{`
            @keyframes celebrate {
              0% { transform: scale(0) rotate(0deg); opacity: 0; }
              50% { transform: scale(1.2) rotate(180deg); }
              100% { transform: scale(1) rotate(360deg); opacity: 1; }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Review screen
  if (showReviewScreen) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        {/* Header */}
        <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '24px', margin: 0 }}>Check Answers</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={() => setShowReviewScreen(false)}
                style={{ padding: '10px 20px', border: '2px solid black', backgroundColor: 'white', cursor: 'pointer' }}
              >
                Back to Test
              </button>
              <button 
                onClick={handleSubmitTest}
                style={{ padding: '10px 20px', backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer' }}
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>

        {/* Review Grid */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <div style={{ backgroundColor: 'white', padding: '30px', marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '10px' }}>Progress Summary</h3>
            <p>Answered: {answeredCount} of {totalQuestions} questions</p>
            <p>Unanswered: {totalQuestions - answeredCount} questions</p>
            <p>Flagged for review: {flaggedQuestions.size} questions</p>
          </div>

          {/* Section-by-section review */}
          {COMPREHENSIVE_TEST.sections.map((section, sectionIdx) => {
            const sectionQuestions = section.questions;
            const sectionAnsweredCount = sectionQuestions.filter(q => answers[q.id] !== undefined).length;
            
            return (
              <div key={section.id} style={{ marginBottom: '30px' }}>
                <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '15px' }}>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>{section.name}</h4>
                  <p style={{ margin: 0, color: '#666' }}>
                    {sectionAnsweredCount} of {section.questions.length} answered • {section.description}
                  </p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '12px' }}>
                  {sectionQuestions.map((q, qIdx) => {
                    const isAnswered = answers[q.id] !== undefined;
                    const isFlagged = flaggedQuestions.has(q.id);
                    
                    return (
                      <button
                        key={q.id}
                        onClick={() => handleGoToQuestion(sectionIdx, qIdx)}
                        style={{
                          padding: '15px',
                          backgroundColor: isAnswered ? '#10b981' : '#e5e7eb',
                          color: isAnswered ? 'white' : 'black',
                          border: isFlagged ? '3px solid #f59e0b' : 'none',
                          cursor: 'pointer',
                          position: 'relative',
                          fontSize: '16px',
                          fontWeight: 'bold'
                        }}
                      >
                        {qIdx + 1}
                        {isFlagged && (
                          <div style={{ position: 'absolute', top: '3px', right: '3px', fontSize: '14px' }}>
                            🚩
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div style={{ marginTop: '30px', backgroundColor: '#fef3c7', padding: '15px' }}>
            <p style={{ margin: 0 }}>
              <strong>Tip:</strong> Review any unanswered or flagged questions before submitting. 
              You can click any question number to jump directly to it.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main test interface
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Minimal Header */}
      <div style={{ backgroundColor: 'white', padding: '10px 20px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Overall Counter - Left */}
          <span style={{ fontSize: '22px', color: '#000', fontWeight: 'bold' }}>
            {answeredCount} / {totalQuestions}
          </span>

          {/* Timer - Center */}
          <div style={{ 
            fontSize: '22px', 
            fontWeight: 'bold', 
            color: getTimeColor(),
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
            <span>⏱️</span>
            <span>{formatTime(timeRemaining)}</span>
          </div>

          {/* Exit Button - Right */}
          <button 
            onClick={handleExit}
            style={{ 
              fontSize: '26px', 
              border: 'none', 
              backgroundColor: 'transparent', 
              cursor: 'pointer',
              padding: '0',
              lineHeight: 1,
              color: '#666'
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Question Content */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '30px' }}>
          {/* Question Navigator Sidebar */}
          <div style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', height: 'fit-content', position: 'sticky', top: '100px', borderRadius: '4px' }}>
            {COMPREHENSIVE_TEST.sections.map((section, sectionIdx) => {
              const isSectionVisible = sectionIdx === currentSectionIndex;
              const sectionQs = section.questions.map(q => q.id);
              const sectionAnswered = sectionQs.filter(id => progressedQuestions.has(id)).length;
              const isCompleted = sectionAnswered === section.questions.length;
              const isNotStarted = sectionAnswered === 0;
              const isInProgress = sectionAnswered > 0 && !isCompleted;
              const isSectionLocked = completedSections.has(sectionIdx);
              
              // Determine status indicator
              let statusColor;
              if (isSectionVisible) {
                statusColor = '#121214'; // black for current
              } else if (isCompleted) {
                statusColor = '#121214'; // black for completed
              } else if (isInProgress) {
                statusColor = '#9ca3af'; // grey for in progress
              } else {
                statusColor = '#d1d5db'; // light grey for not started
              }
              
              return (
                <div
                  key={section.id}
                  style={{
                    marginBottom: '16px',
                    backgroundColor: isSectionLocked ? '#f3f4f6' : '#f9fafb',
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid #e5e7eb',
                    opacity: isSectionLocked ? 0.6 : 1
                  }}
                >
                  <div style={{ 
                    fontSize: '15px', 
                    fontWeight: isSectionVisible ? '600' : '500',
                    color: '#1f2937',
                    marginBottom: isSectionVisible ? '12px' : '0',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center'
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {isSectionLocked && <span style={{ fontSize: '16px' }}>✓</span>}
                        {section.name}
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#6b7280' }}>
                        {sectionAnswered}/{section.questions.length} answered
                      </div>
                    </div>
                  </div>
                  
                  {isSectionVisible && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                    {section.questions.map((q, qIdx) => {
                      const isAnswered = progressedQuestions.has(q.id) && answers[q.id] !== undefined;
                      const isCurrent = sectionIdx === currentSectionIndex && qIdx === currentQuestionIndex;
                      const isSkipped = progressedQuestions.has(q.id) && answers[q.id] === undefined;
                      const isSectionCompleted = completedSections.has(sectionIdx);
                      const isClickable = !isSectionCompleted && (isSkipped || isAnswered); // Can only click if section not completed
                      
                      let bgColor, textColor, borderStyle;
                      if (isCurrent) {
                        bgColor = 'white';
                        textColor = '#121214';
                        borderStyle = '2px solid #121214';
                      } else if (isAnswered) {
                        bgColor = '#121214';
                        textColor = 'white';
                        borderStyle = 'none';
                      } else if (isSkipped) {
                        bgColor = '#e5e7eb';
                        textColor = '#666';
                        borderStyle = 'none';
                      } else {
                        bgColor = 'white';
                        textColor = '#666';
                        borderStyle = '1px solid #e5e7eb';
                      }
                      
                      return (
                        <button
                          key={q.id}
                          onClick={isClickable ? () => handleGoToQuestion(sectionIdx, qIdx) : undefined}
                          disabled={!isClickable}
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '4px',
                            backgroundColor: bgColor,
                    color: textColor,
                            border: borderStyle,
                            cursor: isClickable ? 'pointer' : 'default',
                            fontSize: '14px',
                            fontWeight: isCurrent ? 'bold' : 'normal',
                    display: 'flex',
                    alignItems: 'center',
                            justifyContent: 'center',
                            opacity: isClickable ? 1 : 0.7
                  }}
                          title={isSectionCompleted ? 'Section completed - locked' : isCurrent ? 'Current' : isAnswered ? 'Answered - Click to review' : isSkipped ? 'Skipped - Click to answer' : 'Not answered'}
                        >
                          {qIdx + 1}
                        </button>
              );
            })}
          </div>
          )}
        </div>
              );
            })}
      </div>

          {/* Main Question Area */}
          <div style={{ backgroundColor: 'white', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderRadius: '4px', position: 'sticky', top: '100px', height: 'fit-content' }}>
            {/* Section Progress */}
            <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '20px', color: '#000', fontWeight: '600' }}>
                  {sectionAnsweredCount} of {currentSection.questions.length} answered
                </span>
              </div>
              <div style={{ width: '100%', height: '6px', backgroundColor: '#e5e7eb', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    width: `${sectionProgress}%`, 
                    height: '100%', 
                    backgroundColor: '#3b82f6',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>
            </div>

            {/* Question Header */}
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', margin: 0, fontFamily: 'Outfit', fontWeight: 500, lineHeight: '1.6', textTransform: 'none' }}>
                {currentQuestion.question}
              </h2>
            </div>

          {/* Answer Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            {currentQuestion.options.map((option) => {
              const isSelected = answers[currentQuestion.id] === option.id;
              
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectAnswer(currentQuestion.id, option.id)}
                  style={{
                    padding: '20px',
                    border: isSelected ? '3px solid #3b82f6' : '2px solid #e5e7eb',
                    backgroundColor: isSelected ? '#eff6ff' : 'white',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    fontSize: '16px',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#3b82f6' : '#e5e7eb',
                    color: isSelected ? 'white' : '#666',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {option.id.toUpperCase()}
                  </div>
                  <span>{option.text}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              {/* Skip Button */}
              <button
                onClick={handleSkip}
                style={{
                  padding: '14px 40px',
                  backgroundColor: 'transparent',
                  color: 'black',
                  border: '2px solid black',
                  cursor: 'pointer',
                  fontSize: '14px',
                  minWidth: '120px',
                }}
              >
                Skip
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                disabled={answers[currentQuestion.id] === undefined}
                style={{
                  padding: '14px 40px',
                  backgroundColor: answers[currentQuestion.id] !== undefined ? 'black' : '#e5e7eb',
                  color: answers[currentQuestion.id] !== undefined ? 'white' : '#9ca3af',
                  border: 'none',
                  cursor: answers[currentQuestion.id] !== undefined ? 'pointer' : 'not-allowed',
                  fontSize: '14px',
                  minWidth: '120px',
                }}
              >
                Next
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      {showExitModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{ backgroundColor: 'white', padding: '40px', maxWidth: '500px', margin: '20px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '15px' }}>Exit Placement Test?</h3>
            <p style={{ marginBottom: '25px' }}>
              Your progress will be saved and you can resume the test later. 
              The timer will continue from where you left off.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button
                onClick={() => setShowExitModal(false)}
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '2px solid black',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Continue Test
              </button>
              <button
                onClick={confirmExit}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Exit & Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{ backgroundColor: 'white', padding: '40px', maxWidth: '500px', margin: '20px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '15px' }}>Submit Your Test?</h3>
            <p style={{ marginBottom: '30px', lineHeight: '1.6', color: '#4b5563' }}>
              Great work! You've completed the placement test. Your responses will help us create a personalized learning path tailored just for you. Ready to see where your journey begins?
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button
                onClick={() => setShowSubmitModal(false)}
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '2px solid black',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Review Answers
              </button>
              <button
                onClick={confirmSubmit}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Finish Section Confirmation Modal */}
      {showFinishSectionModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{ backgroundColor: 'white', padding: '40px', maxWidth: '500px', margin: '20px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '15px' }}>Ready to Submit?</h3>
            <p style={{ marginBottom: '30px' }}>
              Once you finish this section, you won't be able to go back and change your answers. 
              Make sure you've reviewed all questions before continuing.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button
                onClick={() => setShowFinishSectionModal(false)}
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '2px solid black',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Review Answers
              </button>
              <button
                onClick={confirmFinishSection}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Finish Section
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

