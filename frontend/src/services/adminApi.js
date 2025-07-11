const API_BASE_URL = 'http://localhost:3000/api';

export const verifyIsAdmin = async(email) => {
    try {
        const response = await fetch(`${API_BASE_URL}/admin/isAdmin`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Failed to verify admin status');
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error verifying admin status:', error);
        return false;
    }
}

export const getAllUnverifiedUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/unverified-users`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch unverified users');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching unverified users:', error);
    throw error;
  }
};

export const getVerifiedUsers = async(page =1, limit = 10) => {
  try{
    const response = await fetch(`${API_BASE_URL}/admin/get-verified-user?page=${page}&limit=${limit}`,{
      method: 'GET',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    })

    if(!response.ok){
      console.log(response)
      throw new Error('Failed to fetch verified users');
    }

    return await response.json();
  }catch(error){
    console.error('Error fetching verified users:', error);
    throw error
  }
}

export const createAdmin = async (email, role) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/create`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, role })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create admin');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating admin:', error);
    throw error;
  }
};

export const verifyUser = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/verify-user`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      throw new Error('Failed to verify user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error verifying user:', error);
    throw error;
  }
};

export const rejectUser = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/reject-user`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      throw new Error('Failed to reject user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error rejecting user:', error);
    throw error;
  }
};
