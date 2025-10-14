# PDF Conversion Guide
## Converting Markdown Documents to PDF for UNICEF Application

---

## 📄 FILES TO CONVERT

You need to convert these 3 markdown files to PDF:

1. `Rocco_Marinelli_CV.md` → `Marinelli_Rocco_CV.pdf`
2. `UNICEF_CoverLetter_Marinelli_FINAL.md` → `Marinelli_Rocco_CoverLetter.pdf`
3. `UNICEF_Financial_Proposal_REVISED.md` → `Marinelli_Rocco_FinancialProposal.pdf`

---

## METHOD 1: Using Preview (Mac) - RECOMMENDED

**Simplest method for Mac users:**

1. Open the `.md` file in any text editor or markdown viewer
2. **Print** (Cmd + P)
3. Instead of printing, choose **"Save as PDF"** from the PDF dropdown
4. Save with appropriate filename
5. Review the PDF to ensure formatting looks good

---

## METHOD 2: Using VSCode with Markdown PDF Extension

**If you have VSCode:**

1. Install "Markdown PDF" extension by yzane
2. Open the `.md` file in VSCode
3. Right-click in the editor
4. Select "Markdown PDF: Export (pdf)"
5. PDF will be created in the same directory

---

## METHOD 3: Using Online Converters

**Quick web-based option:**

**Recommended Sites:**
- https://www.markdowntopdf.com/
- https://dillinger.io/ (Markdown editor with export)
- https://cloudconvert.com/md-to-pdf

**Steps:**
1. Upload or paste your markdown content
2. Convert to PDF
3. Download the PDF
4. Rename appropriately

**⚠️ Note:** Be cautious with sensitive information on public converters

---

## METHOD 4: Using Pandoc (If You Want to Install It)

**For command-line enthusiasts:**

```bash
# Install pandoc (Mac with Homebrew)
brew install pandoc

# Install BasicTeX for better PDF output (optional but recommended)
brew install --cask basictex

# Convert markdown to PDF
pandoc Rocco_Marinelli_CV.md -o Marinelli_Rocco_CV.pdf --pdf-engine=pdflatex

# Or simpler (without LaTeX)
pandoc Rocco_Marinelli_CV.md -o Marinelli_Rocco_CV.pdf
```

**Convert all three files:**

```bash
cd /Users/roccomarinelli/portfolio/UNICEF_Application/

pandoc Rocco_Marinelli_CV.md -o Marinelli_Rocco_CV.pdf
pandoc UNICEF_CoverLetter_Marinelli_FINAL.md -o Marinelli_Rocco_CoverLetter.pdf
pandoc UNICEF_Financial_Proposal_REVISED.md -o Marinelli_Rocco_FinancialProposal.pdf
```

---

## METHOD 5: Using Pages or Word

**If you prefer familiar tools:**

1. Open the `.md` file in a text editor
2. Copy all content
3. Paste into Pages (Mac) or Word
4. Apply basic formatting if needed:
   - Headers as appropriate sizes
   - Consistent spacing
   - Professional font (e.g., Calibri, Arial, Times New Roman)
5. Export as PDF

---

## 📋 POST-CONVERSION CHECKLIST

After converting each file, check:

### Visual Quality
- [ ] All text is readable and clear
- [ ] Headers are properly formatted and stand out
- [ ] Bullet points and lists display correctly
- [ ] No strange characters or encoding issues
- [ ] Page breaks are in sensible places

### Content Accuracy
- [ ] All content from markdown is present
- [ ] Contact information is correct
- [ ] No missing sections
- [ ] Tables (if any) display properly

### File Properties
- [ ] File size is reasonable (under 5MB per file)
- [ ] Filename follows convention:
  - `Marinelli_Rocco_CV.pdf`
  - `Marinelli_Rocco_CoverLetter.pdf`
  - `Marinelli_Rocco_FinancialProposal.pdf`

### Professional Appearance
- [ ] Clean, professional formatting
- [ ] Consistent fonts and spacing
- [ ] Easy to read on screen and print
- [ ] No unnecessary styling or colours

---

## 🎨 FORMATTING TIPS

### If You Need to Adjust Formatting

**Font Recommendations:**
- **Serif fonts:** Times New Roman, Georgia, Garamond (traditional, formal)
- **Sans-serif fonts:** Calibri, Arial, Helvetica (modern, clean)
- **Font size:** 11-12pt for body text, 16-20pt for main headers

**Spacing:**
- Use 1.15 or 1.5 line spacing for readability
- Add space between sections
- Keep consistent margins (2.5cm / 1 inch)

**Professional Elements:**
- Keep headers bold and distinct
- Use consistent bullet point style
- Ensure contact information is prominent
- Page numbers on multi-page documents

---

## ⚠️ IMPORTANT NOTES

### Australian English
All documents are written in Australian English. Ensure PDF conversion doesn't change:
- -ise endings (organise, optimise, recognise)
- -our endings (colour, favour, behaviour)
- -tre endings (centre)

### Consistency Across Documents
- Same font family across all three PDFs
- Consistent header styling
- Similar professional appearance
- Contact information matches across all documents

### File Size
- Keep PDFs under 5MB each (preferably under 2MB)
- If too large, reduce image quality or compress
- Most markdown-to-PDF conversions are text-only and small

---

## 🚀 QUICK START (RECOMMENDED APPROACH)

**Fastest method for Mac users:**

1. **Open** each `.md` file in TextEdit or any text editor
2. **Select All** (Cmd + A)
3. **Copy** (Cmd + C)
4. **Open** Pages (or Word)
5. **Paste** (Cmd + V)
6. **Quick format:**
   - Set font to Calibri or Arial, 11pt
   - Make first line (name) 20pt bold
   - Make section headers 14pt bold
   - Add spacing between sections
7. **File → Export to → PDF**
8. **Name** according to convention
9. **Repeat** for all three documents

**Time:** ~15-20 minutes for all three files

---

## ✅ FINAL FILES CHECKLIST

Before submitting, you should have:

### In Your UNICEF_Application Folder:
```
/Users/roccomarinelli/portfolio/UNICEF_Application/

Core Documents (Submit These):
├── Marinelli_Rocco_CV.pdf
├── Marinelli_Rocco_CoverLetter.pdf
└── Marinelli_Rocco_FinancialProposal.pdf

Source Files (Keep for Reference):
├── Rocco_Marinelli_CV.md
├── UNICEF_CoverLetter_Marinelli_FINAL.md
├── UNICEF_Financial_Proposal_REVISED.md

Supporting Documents (Reference Only):
├── JOB_ANALYSIS.md
├── URGENT_ACTION_PLAN.md
├── README.md
└── PDF_CONVERSION_GUIDE.md (this file)
```

---

## 📧 SUBMISSION REMINDER

**Application Method:** LinkedIn Job Application
**Required Documents:** 3 PDFs (CV, Cover Letter, Financial Proposal)
**Deadline:** 14 October 2025 (Finland time)
**Critical:** "Applications without a financial proposal will not be considered"

---

## 🆘 TROUBLESHOOTING

### PDF Looks Messy
**Solution:** Use Pages or Word for more control over formatting

### Special Characters Display Incorrectly
**Solution:** Ensure UTF-8 encoding, or replace manually

### File Too Large
**Solution:** Convert using simple text-based method (Pandoc without images)

### Formatting Doesn't Look Professional
**Solution:** Use Pages/Word template, apply consistent styling

---

## 💡 PRO TIP

**Create a professional header/footer in Pages:**

**Header:**
```
Rocco Marinelli | Digital Content Strategist
rocco.marineli@gmail.com | +61 490 038 888
```

**Footer:**
```
Page [number] of [total] | UNICEF Application - October 2025
```

This adds polish and ensures contact info is on every page.

---

**Good luck with your application!**

*If you need any adjustments to the markdown files before converting, let me know.*
