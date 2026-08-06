import dns from 'dns/promises';

/**
 * Validates if an email domain has MX records
 * @param {string} email - Email address to validate
 * @returns {Promise<boolean>} - True if domain has MX records
 */
export async function validateMXRecord(email) {
  try {
    const domain = email.split('@')[1];
    
    if (!domain) {
      return false;
    }

    const mxRecords = await dns.resolveMx(domain);
    
    // Check if at least one MX record exists
    return mxRecords && mxRecords.length > 0;
  } catch (error) {
    // DNS lookup failed or no MX records
    return false;
  }
}
