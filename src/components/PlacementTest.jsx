import { useState, useEffect } from 'react';

// Comprehensive placement test data - would come from API in production
const COMPREHENSIVE_TEST = {
  title: "Comprehensive Placement Test (Grades 6-12)",
  totalTime: 5400, // 90 minutes total (1.5 hours)
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
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [timeRemaining, setTimeRemaining] = useState(COMPREHENSIVE_TEST.totalTime);
  const [isTestActive, setIsTestActive] = useState(true);
  const [showReviewScreen, setShowReviewScreen] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showSectionTransition, setShowSectionTransition] = useState(false);
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

  // Get time color based on remaining time
  const getTimeColor = () => {
    const percentRemaining = (timeRemaining / COMPREHENSIVE_TEST.totalTime) * 100;
    if (percentRemaining < 10) return '#DC2626'; // red
    if (percentRemaining < 25) return '#F59E0B'; // orange
    return '#10B981'; // green
  };

  const currentSection = COMPREHENSIVE_TEST.sections[currentSectionIndex];
  const currentQuestion = currentSection.questions[currentQuestionIndex];
  const totalSections = COMPREHENSIVE_TEST.sections.length;
  
  // Calculate total questions across all sections
  const totalQuestions = COMPREHENSIVE_TEST.sections.reduce((sum, section) => sum + section.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / totalQuestions) * 100;
  
  // Current section progress
  const sectionAnsweredCount = currentSection.questions.filter(q => answers[q.id] !== undefined).length;
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
  const handleNext = () => {
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentSectionIndex < totalSections - 1) {
      // End of section, show transition
      setShowSectionTransition(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentSectionIndex > 0) {
      // Go to previous section's last question
      setCurrentSectionIndex(prev => prev - 1);
      setCurrentQuestionIndex(COMPREHENSIVE_TEST.sections[currentSectionIndex - 1].questions.length - 1);
    }
  };

  const handleNextSection = () => {
    setShowSectionTransition(false);
    setCurrentSectionIndex(prev => prev + 1);
    setCurrentQuestionIndex(0);
  };

  const handleGoToQuestion = (sectionIndex, questionIndex) => {
    setCurrentSectionIndex(sectionIndex);
    setCurrentQuestionIndex(questionIndex);
    setShowReviewScreen(false);
    setShowSectionTransition(false);
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

  // Section Transition screen
  if (showSectionTransition) {
    const nextSection = COMPREHENSIVE_TEST.sections[currentSectionIndex + 1];
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', padding: '40px', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>✓</div>
          <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>{currentSection.name} Complete!</h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', color: '#666' }}>
            Great job! You've finished the {currentSection.name} section.
          </p>
          {nextSection && (
            <>
              <div style={{ backgroundColor: '#f3f4f6', padding: '20px', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Up Next:</h3>
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{nextSection.name}</p>
                <p style={{ fontSize: '14px', color: '#666' }}>{nextSection.description}</p>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
                  {nextSection.questions.length} questions • ~{Math.ceil(nextSection.timeAllocation / 60)} minutes
                </p>
              </div>
              <button
                onClick={handleNextSection}
                style={{
                  padding: '15px 40px',
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                Continue to {nextSection.name} →
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Test completion screen
  if (isSubmitted) {
    const sectionsCompleted = COMPREHENSIVE_TEST.sections.map(section => {
      const sectionQuestions = section.questions.map(q => q.id);
      const answeredInSection = sectionQuestions.filter(id => answers[id] !== undefined).length;
      return {
        name: section.name,
        answered: answeredInSection,
        total: section.questions.length
      };
    });

    return (
      <div style={{ padding: '40px', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Test Submitted Successfully!</h1>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>
          Thank you for completing the {COMPREHENSIVE_TEST.title}.
        </p>
        <div style={{ backgroundColor: '#f3f4f6', padding: '20px', marginBottom: '20px', textAlign: 'left' }}>
          <p style={{ marginBottom: '15px' }}><strong>Overall Summary:</strong></p>
          <p style={{ marginBottom: '10px' }}>Questions Answered: {answeredCount} of {totalQuestions}</p>
          <p style={{ marginBottom: '15px' }}>Time Used: {formatTime(COMPREHENSIVE_TEST.totalTime - timeRemaining)}</p>
          
          <p style={{ marginTop: '20px', marginBottom: '10px' }}><strong>By Section:</strong></p>
          {sectionsCompleted.map((section, idx) => (
            <p key={idx} style={{ marginBottom: '5px' }}>
              • {section.name}: {section.answered} / {section.total} questions
            </p>
          ))}
        </div>
        <p>Your results will be processed and you'll receive your placement levels for each subject shortly.</p>
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
      {/* Top Navigation Bar */}
      <div style={{ backgroundColor: 'white', padding: '15px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Test Title */}
          <div>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '2px' }}>
              Section {currentSectionIndex + 1} of {totalSections}
            </div>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {currentSection.name}
            </div>
          </div>

          {/* Timer */}
          <div style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: getTimeColor(),
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>⏱️</span>
            <span>{formatTime(timeRemaining)}</span>
          </div>

          {/* Exit Button */}
          <button 
            onClick={handleExit}
            style={{ 
              fontSize: '28px', 
              border: 'none', 
              backgroundColor: 'transparent', 
              cursor: 'pointer',
              padding: '5px 10px'
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Section Indicators */}
      <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: '#666', fontWeight: 'bold' }}>
              Test Sections
            </span>
            <span style={{ fontSize: '12px', color: '#999' }}>
              {answeredCount} of {totalQuestions} total questions
            </span>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {COMPREHENSIVE_TEST.sections.map((section, idx) => {
              const sectionQs = section.questions.map(q => q.id);
              const sectionAnswered = sectionQs.filter(id => answers[id] !== undefined).length;
              const sectionTotal = section.questions.length;
              const isCurrentSection = idx === currentSectionIndex;
              const isCompleted = sectionAnswered === sectionTotal;
              const isNotStarted = sectionAnswered === 0 && !isCurrentSection;
              
              let backgroundColor, textColor;
              if (isCurrentSection) {
                backgroundColor = '#121214'; // black
                textColor = 'white';
              } else if (isCompleted) {
                backgroundColor = '#10b981'; // green
                textColor = 'white';
              } else {
                backgroundColor = '#e5e7eb'; // grey
                textColor = '#666';
              }
              
              return (
                <div
                  key={section.id}
                  style={{
                    padding: '10px 16px',
                    backgroundColor,
                    color: textColor,
                    fontSize: '13px',
                    fontWeight: isCurrentSection ? 'bold' : 'normal',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {isCompleted && (
                    <span style={{ fontSize: '14px' }}>✓</span>
                  )}
                  <span>{section.name}: {sectionAnswered}/{sectionTotal}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '30px' }}>
          {/* Main Question Area */}
          <div style={{ backgroundColor: 'white', padding: '40px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            {/* Section Progress */}
            <div style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#666', fontWeight: 'bold' }}>
                  {currentSection.name} - Question {currentQuestionIndex + 1} of {currentSection.questions.length}
                </span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', overflow: 'hidden' }}>
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
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '18px', margin: 0, fontFamily: 'Outfit', fontWeight: 500, lineHeight: '1.6' }}>
                {currentQuestion.question}
              </h2>
            </div>

          {/* Answer Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0 && currentSectionIndex === 0}
              style={{
                padding: '14px 40px',
                border: '2px solid black',
                backgroundColor: 'white',
                cursor: (currentQuestionIndex === 0 && currentSectionIndex === 0) ? 'not-allowed' : 'pointer',
                opacity: (currentQuestionIndex === 0 && currentSectionIndex === 0) ? 0.5 : 1,
                fontSize: '14px',
                minWidth: '180px',
                textTransform: 'uppercase'
              }}
            >
              ← Previous
            </button>

            <div style={{ display: 'flex', gap: '10px' }}>
              {/* Show Review button only on last question of a section */}
              {currentQuestionIndex === currentSection.questions.length - 1 && (
                <button
                  onClick={handleReviewAnswers}
                  style={{
                    padding: '14px 40px',
                    border: '2px solid #3b82f6',
                    backgroundColor: 'white',
                    color: '#3b82f6',
                    cursor: 'pointer',
                    fontSize: '14px',
                    minWidth: '200px',
                    textTransform: 'uppercase'
                  }}
                >
                  Review Section
                </button>
              )}

              {(() => {
                const isAnswered = answers[currentQuestion.id] !== undefined;
                const isLastQuestionInSection = currentQuestionIndex === currentSection.questions.length - 1;
                const isLastSection = currentSectionIndex === totalSections - 1;
                
                let buttonText, buttonAction, buttonStyles;
                
                if (!isAnswered) {
                  buttonText = 'Skip';
                  buttonAction = handleNext;
                  buttonStyles = {
                    padding: '14px 40px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: '2px solid black',
                    cursor: 'pointer',
                    fontSize: '14px',
                    minWidth: '200px',
                    textTransform: 'uppercase'
                  };
                } else if (isLastQuestionInSection && isLastSection) {
                  buttonText = 'Submit Test';
                  buttonAction = handleSubmitTest;
                  buttonStyles = {
                    padding: '14px 40px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    minWidth: '200px',
                    textTransform: 'uppercase'
                  };
                } else if (isLastQuestionInSection) {
                  buttonText = `Finish ${currentSection.name} →`;
                  buttonAction = handleNext;
                  buttonStyles = {
                    padding: '14px 40px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    minWidth: '200px',
                    textTransform: 'uppercase'
                  };
                } else {
                  buttonText = 'Next →';
                  buttonAction = handleNext;
                  buttonStyles = {
                    padding: '14px 40px',
                    backgroundColor: 'black',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    minWidth: '200px',
                    textTransform: 'uppercase'
                  };
                }
                
                return (
                  <button onClick={buttonAction} style={buttonStyles}>
                    {buttonText}
                  </button>
                );
              })()}
            </div>
          </div>
          </div>

          {/* Question Navigator Sidebar */}
          <div style={{ backgroundColor: 'white', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', height: '100%', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '18px', margin: '0 0 20px 0', fontWeight: 'bold' }}>Questions</h3>
            
            {COMPREHENSIVE_TEST.sections.map((section, sectionIdx) => {
              const isSectionVisible = sectionIdx === currentSectionIndex;
              const sectionQs = section.questions.map(q => q.id);
              const sectionAnswered = sectionQs.filter(id => answers[id] !== undefined).length;
              
              return (
                <div key={section.id}>
                  <div 
                    style={{ 
                      fontSize: '15px', 
                      fontWeight: 'bold', 
                      marginBottom: '8px',
                      color: isSectionVisible ? '#121214' : '#999',
                      padding: '10px',
                      backgroundColor: isSectionVisible ? '#f3f4f6' : 'transparent'
                    }}
                  >
                    {section.name}
                    <div style={{ fontSize: '13px', fontWeight: 'normal', marginTop: '4px' }}>
                      {sectionAnswered}/{section.questions.length} answered
                    </div>
                  </div>
                  
                  {isSectionVisible && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
                      {section.questions.map((q, qIdx) => {
                        const isAnswered = answers[q.id] !== undefined;
                        const isCurrent = sectionIdx === currentSectionIndex && qIdx === currentQuestionIndex;
                        const isSkipped = flaggedQuestions.has(q.id);
                        
                        return (
                          <button
                            key={q.id}
                            onClick={() => handleGoToQuestion(sectionIdx, qIdx)}
                            style={{
                              width: '48px',
                              height: '48px',
                              borderRadius: '50%',
                              backgroundColor: isCurrent ? '#f59e0b' : isAnswered ? '#10b981' : isSkipped ? '#fef3c7' : '#f3f4f6',
                              color: isCurrent || isAnswered ? 'white' : '#666',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: isCurrent ? 'bold' : 'normal',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative'
                            }}
                            title={isAnswered ? 'Answered' : isSkipped ? 'Skipped' : 'Not answered'}
                          >
                            {qIdx + 1}
                            {isAnswered && !isCurrent && (
                              <span style={{ position: 'absolute', top: '2px', right: '6px', fontSize: '10px' }}>✓</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            
            <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f3f4f6', fontSize: '14px' }}>
              <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>Legend:</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                <span>Current</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                <span>Answered</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#f3f4f6', border: '1px solid #e5e7eb' }}></div>
                <span>Not Answered</span>
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
            <div style={{ marginBottom: '25px' }}>
              <p><strong>Summary:</strong></p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>✓ Answered: {answeredCount} questions</li>
                <li>✗ Unanswered: {totalQuestions - answeredCount} questions</li>
                {flaggedQuestions.size > 0 && (
                  <li>🚩 Flagged: {flaggedQuestions.size} questions</li>
                )}
              </ul>
              {answeredCount < totalQuestions && (
                <p style={{ color: '#f59e0b', fontWeight: 'bold' }}>
                  ⚠️ You have unanswered questions. Are you sure you want to submit?
                </p>
              )}
            </div>
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
                Review More
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
    </div>
  );
}

