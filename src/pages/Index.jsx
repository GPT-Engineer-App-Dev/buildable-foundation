import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Candy, IceCream, Cake, Lollipop, Cherry, Sparkles } from 'lucide-react';

const CandyButton = ({ children, icon: Icon, onClick }) => (
  <Button 
    className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white m-2 transform transition-all duration-300 hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl rounded-full px-6 py-3"
    onClick={onClick}
  >
    <Icon className="mr-2" size={24} />
    {children}
  </Button>
);

const FloatingCandy = ({ icon: Icon, style }) => (
  <div className="absolute animate-float" style={style}>
    <Icon size={24} className="text-pink-500" />
  </div>
);

const Index = () => {
  const [score, setScore] = useState(0);
  const [candies, setCandies] = useState([]);

  const addCandy = (CandyIcon) => {
    const newCandy = {
      id: Date.now(),
      icon: CandyIcon,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
      },
    };
    setCandies(prev => [...prev, newCandy]);
    setScore(prev => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCandies(prev => prev.filter(candy => candy.id > Date.now() - 10000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 animate-gradient-x overflow-hidden">
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 text-center relative">
        <h1 className="text-4xl font-bold animate-bounce">
          Candy Wonderland <Lollipop className="inline-block ml-2" />
        </h1>
        <div className="absolute top-2 right-4 bg-white text-pink-600 rounded-full px-4 py-2 shadow-lg">
          Score: {score}
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 text-center relative">
        <h2 className="text-2xl font-semibold mb-6 text-pink-800 animate-pulse">
          Welcome to the Sweetest App Ever!
        </h2>
        <p className="mb-6 text-pink-700 text-lg">
          Click the buttons to add magical candies to your wonderland!
        </p>
        <div className="flex flex-wrap justify-center">
          <CandyButton icon={Candy} onClick={() => addCandy(Candy)}>Add Candy</CandyButton>
          <CandyButton icon={IceCream} onClick={() => addCandy(IceCream)}>Add Ice Cream</CandyButton>
          <CandyButton icon={Cake} onClick={() => addCandy(Cake)}>Add Cake</CandyButton>
          <CandyButton icon={Cherry} onClick={() => addCandy(Cherry)}>Add Cherry</CandyButton>
        </div>
        {candies.map(candy => (
          <FloatingCandy key={candy.id} icon={candy.icon} style={candy.style} />
        ))}
      </main>

      <footer className="bg-gradient-to-r from-pink-400 to-purple-500 p-4 text-center text-white">
        <p className="animate-pulse">
          &copy; 2023 Candy Wonderland. All rights reserved. <Sparkles className="inline-block ml-1" />
        </p>
      </footer>
    </div>
  );
};

export default Index;