
import React, { createContext, useState, useContext } from 'react';

interface ApplicationFormContextType {
  isFormOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const ApplicationFormContext = createContext<ApplicationFormContextType | undefined>(undefined);

export const ApplicationFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <ApplicationFormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </ApplicationFormContext.Provider>
  );
};

export const useApplicationForm = () => {
  const context = useContext(ApplicationFormContext);
  if (context === undefined) {
    throw new Error('useApplicationForm must be used within an ApplicationFormProvider');
  }
  return context;
};
