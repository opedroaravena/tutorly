const express = require('express');
const app = express();
app.use(express.json());

const sessions = new Map();

app.post('/api/core', (req, res) => {
  const { query } = req.body;

  if (query?.logon) {
    const { userName, deviceName } = query.logon;
    const userSerial = '109099';
    const sessionId = generateSessionId();
    
    sessions.set(sessionId, {
      userName,
      deviceName,
      timestamp: Date.now()
    });

    return res.json({
      query: {
        logon: {
          userName,
          userSerial,
          deviceName,
          deviceSerial: userSerial,
          databaseName: 'D0000T99',
          sessionId,
          sessionTimeoutSeconds: '1800'
        }
      }
    });
  }

  if (query?.createAccount) {
    const { sessionId } = query;
    if (!validateSession(sessionId)) {
      return res.status(401).json({
        error: {
          code: 'INVALID_SESSION',
          message: 'Session expired or invalid'
        }
      });
    }
    
    // Process account creation logic here
    return res.json({
      query: {
        createAccount: {
          status: 'SUCCESS',
          accountNumber: generateAccountNumber(),
          timestamp: new Date().toISOString()
        }
      }
    });
  }

  res.status(400).json({
    error: {
      code: 'INVALID_REQUEST',
      message: 'Invalid request format'
    }
  });
});

function generateSessionId() {
  return Array.from({ length: 32 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('').toUpperCase();
}

function generateAccountNumber() {
  return Date.now().toString().slice(-10);
}

function validateSession(sessionId) {
  const session = sessions.get(sessionId);
  if (!session) return false;
  
  const sessionAge = Date.now() - session.timestamp;
  return sessionAge < 1800000; // 30 minutes
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Mock Corelation core service running on port ${PORT}`);
});