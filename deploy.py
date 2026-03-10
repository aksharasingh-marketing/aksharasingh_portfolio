import pexpect
import sys

child = pexpect.spawn('npx -y surge --domain akshara-testgorilla-portfolio.surge.sh', cwd='out', encoding='utf-8')
child.logfile = sys.stdout

# It might ask for email first
i = child.expect(['email:', 'Login:', pexpect.EOF, pexpect.TIMEOUT], timeout=30)
if i == 0 or i == 1:
    child.sendline('akshara.deploy.2026@yopmail.com')
    
    # Then it expects password
    child.expect('password:', timeout=10)
    child.sendline('Akshara1234!')
    
    # It might ask for project path if not specified
    child.expect(pexpect.EOF, timeout=60)
