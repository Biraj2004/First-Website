# Security Policy

## Supported Versions

This project is currently maintained on the `main` branch.
Security fixes are applied to the latest code on `main`.

## Reporting a Vulnerability

Please do not open public issues for security vulnerabilities.

Use one of the following channels:

1. GitHub Security Advisories (preferred):
   - Go to: https://github.com/Biraj2004/First-Website/security/advisories
   - Click "Report a vulnerability"
2. If advisories are unavailable, open a private communication channel with the maintainer first.

## What to Include in a Report

- Affected file(s) and feature(s)
- Clear reproduction steps
- Impact assessment (what can be exploited)
- Suggested mitigation (if available)
- Proof of concept (only if necessary and safe)

## Response Process

- Initial triage target: within 7 days
- Confirmation and severity assessment: as soon as reproducible
- Fix timeline: based on impact and complexity
- Public disclosure: after a fix is available or mitigation is documented

## Scope Notes

This is a static frontend project.
Typical relevant risks include:

- Unsafe external link handling
- Insecure client-side storage usage
- Misconfigured security headers at hosting layer

Server-side infrastructure and third-party platforms are out of scope unless directly introduced by this repository.
