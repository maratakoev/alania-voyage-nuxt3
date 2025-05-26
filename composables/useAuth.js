// composables/useAuth.js

export const useAuth = () => {
  const register = async (userData) => {
    try {
      const response = await $fetch('http://localhost:3001/register', {
        method: 'POST',
        body: userData
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const login = async (credentials) => {
    try {
      const response = await $fetch('http://localhost:3001/login', {
        method: 'POST',
        body: credentials
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  return { register, login };
};
