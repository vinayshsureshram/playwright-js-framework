# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "Login Page" [level=2] [ref=e8]
      - heading "This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages." [level=4] [ref=e9]:
        - text: This is where you can log into the secure area. Enter
        - emphasis [ref=e10]: tomsmith
        - text: for the username and
        - emphasis [ref=e11]: SuperSecretPassword!
        - text: for the password. If the information is wrong you should see error messages.
      - generic [ref=e12]:
        - generic [ref=e14]:
          - generic [ref=e15] [cursor=pointer]: Username
          - textbox "Username" [ref=e16]: tomsmith
        - generic [ref=e18]:
          - generic [ref=e19] [cursor=pointer]: Password
          - textbox "Password" [ref=e20]: SuperSecretPassword!
        - button " Login" [ref=e21] [cursor=pointer]:
          - generic [ref=e22]:  Login
  - generic [ref=e24]:
    - separator [ref=e25]
    - generic [ref=e26]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e27] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```