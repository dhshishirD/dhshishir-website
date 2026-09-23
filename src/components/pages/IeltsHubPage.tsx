import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Mic, BarChart3, Scale, Zap, Award, 
  Sparkles, Download, ArrowRight, Clock, Compass,
  FileText, Eye, Check, X, Camera, Volume2, Calendar, ExternalLink,
  ListOrdered, Filter, Layers, ChevronRight, CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { IeltsCollocationDuel } from '../tools/IeltsCollocationDuel';
import { IeltsTask1ChartMorpher } from '../tools/IeltsTask1ChartMorpher';
import { IeltsTfngCourtroom } from '../tools/IeltsTfngCourtroom';
import { IeltsSpeakingFlowRadar } from '../tools/IeltsSpeakingFlowRadar';
import { IeltsWritingAnalyzer } from '../tools/IeltsWritingAnalyzer';
import { IeltsSpeakingSimulator } from '../tools/IeltsSpeakingSimulator';
import { IeltsScoreEstimator } from '../tools/IeltsScoreEstimator';
import { IeltsHandwrittenEssayScanner } from '../tools/IeltsHandwrittenEssayScanner';
import { IeltsListeningExamEngine } from '../tools/IeltsListeningExamEngine';
import { IeltsReadingExamEngine } from '../tools/IeltsReadingExamEngine';
import { IeltsDailyDrillTracker } from '../tools/IeltsDailyDrillTracker';
import { AdSenseBanner } from '../common/AdSenseBanner';
import { DailyMissionNotification } from '../common/DailyMissionNotification';

interface IeltsHubPageProps {
  initialToolId?: string;
  user?: any;
  onOpenAuthModal?: () => void;
  onNavigateDashboard?: () => void;
}

export const IeltsHubPage: React.FC<IeltsHubPageProps> = ({ 
  initialToolId,
  user,
  onOpenAuthModal,
  onNavigateDashboard
}) => {
  const [activeMainTab, setActiveMainTab] = useState<'tools' | 'roadmap' | 'masterclass' | 'resources'>('tools');
  const [selectedToolId, setSelectedToolId] = useState<string>(initialToolId || 'daily-drill-tracker');

  const handleLaunchDayDrill = (_dayNumber: number) => {
    setSelectedToolId('daily-drill-tracker');
    setActiveMainTab('tools');
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };

  useEffect(() => {
    if (initialToolId) {
      setSelectedToolId(initialToolId);
      setActiveMainTab('tools');
    }
  }, [initialToolId]);
  const [showTask1Modal, setShowTask1Modal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [targetBand, setTargetBand] = useState('8.5');
  const [examTimeline, setExamTimeline] = useState('90');
  const [currentLevel, setCurrentLevel] = useState('6.5');
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);

  // Executive Branded Document Generator (Printable PDF & Word .DOC)
  const generateBrandedHtml = (title: string, subtitle: string, bodyContent: string) => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title} | DH Shishir Knowledge Portal</title>
  <style>
    @page { size: A4; margin: 20mm; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.6;
      margin: 0;
      padding: 24px;
    }
    .header {
      border-bottom: 3px solid #0f766e;
      padding-bottom: 16px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-title {
      font-size: 22px;
      font-weight: 900;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .brand-subtitle {
      font-size: 11px;
      font-weight: 700;
      color: #0f766e;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 2px;
    }
    .badge {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #166534;
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 999px;
    }
    .doc-title {
      font-size: 20px;
      font-weight: 800;
      color: #0f172a;
      margin: 16px 0 6px 0;
    }
    .doc-desc {
      font-size: 13px;
      color: #475569;
      margin-bottom: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 12px;
    }
    th {
      background: #0f766e;
      color: #ffffff;
      text-align: left;
      padding: 10px 12px;
      font-weight: 700;
    }
    td {
      padding: 10px 12px;
      border-bottom: 1px solid #e2e8f0;
      vertical-align: top;
    }
    tr:nth-child(even) {
      background: #f8fafc;
    }
    .callout {
      background: #f0fdfa;
      border-left: 4px solid #0f766e;
      padding: 14px 16px;
      border-radius: 0 8px 8px 0;
      margin: 16px 0;
      font-size: 13px;
    }
    .callout-title {
      font-weight: 800;
      color: #0f766e;
      margin-bottom: 4px;
    }
    .tag {
      display: inline-block;
      background: #e0f2fe;
      color: #0369a1;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 700;
      margin-right: 4px;
    }
    .footer {
      margin-top: 40px;
      border-top: 1px solid #e2e8f0;
      padding-top: 16px;
      font-size: 11px;
      color: #64748b;
      display: flex;
      justify-content: space-between;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="brand-title">DH SHISHIR KNOWLEDGE PORTAL</div>
      <div class="brand-subtitle">Daloyar Hassan Shishir | Diplomatic Enthusiast, Policy Analyst & English Educator</div>
    </div>
    <div class="badge">Band 8.5+ Official Resource</div>
  </div>

  <h1 class="doc-title">${title}</h1>
  <div class="doc-desc">${subtitle}</div>

  ${bodyContent}

  <div class="footer">
    <div>Official Learning Resource | <a href="https://dhshishir.com/ielts" style="color: #0f766e; text-decoration: none;">dhshishir.com/ielts</a></div>
    <div>Dhaka, Bangladesh • Community: @ieltsenglishfluency</div>
  </div>
</body>
</html>`;
  };

  const handleOpenPrintable = (title: string, subtitle: string, bodyContent: string) => {
    const fullHtml = generateBrandedHtml(title, subtitle, bodyContent);
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(fullHtml);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  const handleDownloadWordDoc = (filename: string, title: string, subtitle: string, bodyContent: string) => {
    const fullHtml = generateBrandedHtml(title, subtitle, bodyContent);
    const blob = new Blob(['\ufeff', fullHtml], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename.endsWith('.doc') ? filename : `${filename}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Pre-compiled Document Contents
  const COLLOCATIONS_DOC_BODY = `
    <div class="callout">
      <div class="callout-title">🏛️ Cambridge Examiner Lexical Resource Framework:</div>
      Band 8.5+ candidate essays do not rely on obscure, thesaurus-picked vocabulary. Instead, they demonstrate natural command of <strong>academic collocations</strong> (verb + noun, adjective + noun, verb + adverb) with syntactic precision and thematic sophistication.
    </div>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 20px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      Domain 1: Governance, Policy & Legal Frameworks
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Academic Collocation</th>
          <th style="width: 15%;">Band 5.5 vs 8.5 Upgrade</th>
          <th style="width: 28%;">Meaning & Context</th>
          <th style="width: 32%;">Examiner Model Sentence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Address the underlying dilemma</strong></td>
          <td><span style="color: #dc2626;">❌ Fix the problem</span><br><span style="color: #166534; font-weight: bold;">✅ Address dilemma</span></td>
          <td>Confront and resolve the fundamental root cause of an institutional crisis.</td>
          <td><em>"Policymakers must <strong>address the underlying dilemma</strong> before imposing arbitrary fiscal tariffs on domestic enterprises."</em></td>
        </tr>
        <tr>
          <td><strong>Enact stringent legislative reforms</strong></td>
          <td><span style="color: #dc2626;">❌ Make hard laws</span><br><span style="color: #166534; font-weight: bold;">✅ Enact reforms</span></td>
          <td>Pass rigorous, strictly enforced statutory laws or regulatory overhauls.</td>
          <td><em>"Parliament was compelled to <strong>enact stringent legislative reforms</strong> to counteract corporate tax avoidance."</em></td>
        </tr>
        <tr>
          <td><strong>Exercise discretionary authority</strong></td>
          <td><span style="color: #dc2626;">❌ Use power to choose</span><br><span style="color: #166534; font-weight: bold;">✅ Discretionary authority</span></td>
          <td>Utilize official decision-making power within legal and statutory boundaries.</td>
          <td><em>"Municipal judges are permitted to <strong>exercise discretionary authority</strong> when handling non-violent juvenile offenses."</em></td>
        </tr>
        <tr>
          <td><strong>Establish enforceable accountability mechanisms</strong></td>
          <td><span style="color: #dc2626;">❌ Check people doing bad</span><br><span style="color: #166534; font-weight: bold;">✅ Accountability mechanisms</span></td>
          <td>Build systemic checks and balances backed by legal consequences.</td>
          <td><em>"International development aid must <strong>establish enforceable accountability mechanisms</strong> to deter bureaucratic graft."</em></td>
        </tr>
        <tr>
          <td><strong>Reconcile diametrically opposed viewpoints</strong></td>
          <td><span style="color: #dc2626;">❌ Bring different sides</span><br><span style="color: #166534; font-weight: bold;">✅ Reconcile viewpoints</span></td>
          <td>Harmonize two completely conflicting political or ideological positions.</td>
          <td><em>"The diplomatic envoy attempted to <strong>reconcile diametrically opposed viewpoints</strong> regarding sovereign maritime corridors."</em></td>
        </tr>
        <tr>
          <td><strong>Set a legally binding precedent</strong></td>
          <td><span style="color: #dc2626;">❌ Make an example for later</span><br><span style="color: #166534; font-weight: bold;">✅ Binding precedent</span></td>
          <td>Establish a benchmark judicial ruling that mandates future compliance.</td>
          <td><em>"The landmark supreme court verdict will <strong>set a legally binding precedent</strong> for digital privacy jurisprudence."</em></td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      Domain 2: Economics, Trade & Financial Systems
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Academic Collocation</th>
          <th style="width: 15%;">Band 5.5 vs 8.5 Upgrade</th>
          <th style="width: 28%;">Meaning & Context</th>
          <th style="width: 32%;">Examiner Model Sentence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Yield a transformative outcome</strong></td>
          <td><span style="color: #dc2626;">❌ Make big change</span><br><span style="color: #166534; font-weight: bold;">✅ Yield outcome</span></td>
          <td>Generate an overwhelmingly profound and positive structural shift.</td>
          <td><em>"Subregional renewable energy integration will <strong>yield a transformative outcome</strong> for South Asian manufacturing corridors."</em></td>
        </tr>
        <tr>
          <td><strong>Exercise fiscal prudence</strong></td>
          <td><span style="color: #dc2626;">❌ Spend money carefully</span><br><span style="color: #166534; font-weight: bold;">✅ Fiscal prudence</span></td>
          <td>Manage public budgets and spending with rigorous caution and discipline.</td>
          <td><em>"Central banks in developing nations must <strong>exercise fiscal prudence</strong> during volatile macroeconomic inflationary cycles."</em></td>
        </tr>
        <tr>
          <td><strong>Perpetuate systemic economic disparities</strong></td>
          <td><span style="color: #dc2626;">❌ Keep rich/poor gap</span><br><span style="color: #166534; font-weight: bold;">✅ Systemic disparities</span></td>
          <td>Reinforce and maintain deep-seated structural income or wealth inequality.</td>
          <td><em>"Regressive consumption taxes inadvertently <strong>perpetuate systemic economic disparities</strong> across working-class demographics."</em></td>
        </tr>
        <tr>
          <td><strong>Precipitate an acute economic crisis</strong></td>
          <td><span style="color: #dc2626;">❌ Cause a bad problem</span><br><span style="color: #166534; font-weight: bold;">✅ Precipitate crisis</span></td>
          <td>Trigger a sudden, severe, and destabilizing financial downturn.</td>
          <td><em>"Unchecked speculative real estate borrowing can <strong>precipitate an acute economic crisis</strong> within vulnerable banking sectors."</em></td>
        </tr>
        <tr>
          <td><strong>Spur domestic industrial competitiveness</strong></td>
          <td><span style="color: #dc2626;">❌ Help local business</span><br><span style="color: #166534; font-weight: bold;">✅ Industrial competitiveness</span></td>
          <td>Stimulate national industries to innovate and rival international exporters.</td>
          <td><em>"Targeted tariff exemptions on raw materials are intended to <strong>spur domestic industrial competitiveness</strong>."</em></td>
        </tr>
        <tr>
          <td><strong>Curb rampant inflationary pressure</strong></td>
          <td><span style="color: #dc2626;">❌ Stop fast rising prices</span><br><span style="color: #166534; font-weight: bold;">✅ Curb pressure</span></td>
          <td>Restrain or suppress uncontrolled, rapid escalations in consumer prices.</td>
          <td><em>"Aggressive monetary tightening was enacted to <strong>curb rampant inflationary pressure</strong> across the commodity market."</em></td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      Domain 3: Technology, Artificial Intelligence & Data
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Academic Collocation</th>
          <th style="width: 15%;">Band 5.5 vs 8.5 Upgrade</th>
          <th style="width: 28%;">Meaning & Context</th>
          <th style="width: 32%;">Examiner Model Sentence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Accelerate technological obsolescence</strong></td>
          <td><span style="color: #dc2626;">❌ Make old tools useless</span><br><span style="color: #166534; font-weight: bold;">✅ Tech obsolescence</span></td>
          <td>Hasten the speed at which existing infrastructure becomes outmoded.</td>
          <td><em>"Generative algorithmic engines continue to <strong>accelerate technological obsolescence</strong> in legacy clerical software."</em></td>
        </tr>
        <tr>
          <td><strong>Harness algorithmic predictive capability</strong></td>
          <td><span style="color: #dc2626;">❌ Use AI to guess</span><br><span style="color: #166534; font-weight: bold;">✅ Predictive capability</span></td>
          <td>Utilize machine learning and computational models for future forecasting.</td>
          <td><em>"Epidemiologists <strong>harnessed algorithmic predictive capability</strong> to anticipate viral propagation patterns."</em></td>
        </tr>
        <tr>
          <td><strong>Impart pivotal strategic insights</strong></td>
          <td><span style="color: #dc2626;">❌ Give important info</span><br><span style="color: #166534; font-weight: bold;">✅ Impart insights</span></td>
          <td>Provide high-level, decisive intelligence or analytical clarity.</td>
          <td><em>"Autonomous telemetry systems <strong>impart pivotal strategic insights</strong> into oceanic shipping container optimization."</em></td>
        </tr>
        <tr>
          <td><strong>Safeguard intellectual property rights</strong></td>
          <td><span style="color: #dc2626;">❌ Protect inventions</span><br><span style="color: #166534; font-weight: bold;">✅ Intellectual property</span></td>
          <td>Defend patents, proprietary algorithms, and creative works from unauthorized theft.</td>
          <td><em>"Comprehensive multilateral accords are essential to <strong>safeguard intellectual property rights</strong> in biotechnology."</em></td>
        </tr>
        <tr>
          <td><strong>Disrupt traditional employment paradigms</strong></td>
          <td><span style="color: #dc2626;">❌ Change normal jobs</span><br><span style="color: #166534; font-weight: bold;">✅ Disrupt paradigms</span></td>
          <td>Radically transform established workplace patterns, roles, and labor structures.</td>
          <td><em>"Robotic automation will inevitably <strong>disrupt traditional employment paradigms</strong> across industrial assembly lines."</em></td>
        </tr>
        <tr>
          <td><strong>Streamline operational logistical pipelines</strong></td>
          <td><span style="color: #dc2626;">❌ Make supply faster</span><br><span style="color: #166534; font-weight: bold;">✅ Streamline pipelines</span></td>
          <td>Optimize complex supply chain channels for maximum throughput and low friction.</td>
          <td><em>"Smart ports utilize automated freight routing to <strong>streamline operational logistical pipelines</strong>."</em></td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      Domain 4: Environment, Climate & Sustainable Ecology
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Academic Collocation</th>
          <th style="width: 15%;">Band 5.5 vs 8.5 Upgrade</th>
          <th style="width: 28%;">Meaning & Context</th>
          <th style="width: 32%;">Examiner Model Sentence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mitigate adverse ecological repercussions</strong></td>
          <td><span style="color: #dc2626;">❌ Stop bad eco effects</span><br><span style="color: #166534; font-weight: bold;">✅ Mitigate repercussions</span></td>
          <td>Lessen or alleviate destructive environmental consequences.</td>
          <td><em>"Mandatory environmental impact assessments are vital to <strong>mitigate adverse ecological repercussions</strong> of river damming."</em></td>
        </tr>
        <tr>
          <td><strong>Undergo catastrophic degradation</strong></td>
          <td><span style="color: #dc2626;">❌ Get ruined badly</span><br><span style="color: #166534; font-weight: bold;">✅ Catastrophic degradation</span></td>
          <td>Suffer irreversible and devastating ecological destruction.</td>
          <td><em>"Vulnerable coral reef ecosystems risk <strong>undergoing catastrophic degradation</strong> if sea surface temperatures climb by 1.5°C."</em></td>
        </tr>
        <tr>
          <td><strong>Transition toward decarbonized energy infrastructure</strong></td>
          <td><span style="color: #dc2626;">❌ Move to green power</span><br><span style="color: #166534; font-weight: bold;">✅ Decarbonized infrastructure</span></td>
          <td>Shift systemic power generation away from fossil fuels to zero-carbon sources.</td>
          <td><em>"Emerging economies require sovereign green bonds to <strong>transition toward decarbonized energy infrastructure</strong>."</em></td>
        </tr>
        <tr>
          <td><strong>Deplete finite natural reserves</strong></td>
          <td><span style="color: #dc2626;">❌ Use up all gas/oil</span><br><span style="color: #166534; font-weight: bold;">✅ Deplete reserves</span></td>
          <td>Exhaust non-renewable natural resources through unsustainable extraction.</td>
          <td><em>"Unregulated mineral extraction threatens to <strong>deplete finite natural reserves</strong> within the next four decades."</em></td>
        </tr>
        <tr>
          <td><strong>Exacerbate environmental vulnerability</strong></td>
          <td><span style="color: #dc2626;">❌ Make climate danger worse</span><br><span style="color: #166534; font-weight: bold;">✅ Environmental vulnerability</span></td>
          <td>Worsen the exposure and susceptibility of communities to ecological hazards.</td>
          <td><em>"Deforestation in riparian deltas serves to <strong>exacerbate environmental vulnerability</strong> during monsoon storm surges."</em></td>
        </tr>
        <tr>
          <td><strong>Promote ecological equilibrium</strong></td>
          <td><span style="color: #dc2626;">❌ Keep nature balanced</span><br><span style="color: #166534; font-weight: bold;">✅ Ecological equilibrium</span></td>
          <td>Support natural biodiversity and harmonious balance in biological systems.</td>
          <td><em>"Reforestation corridors in national parks <strong>promote ecological equilibrium</strong> and preserve endangered mammalian species."</em></td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      Domain 5: Academic Research, Scientific Inquiry & Defense
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Academic Collocation</th>
          <th style="width: 15%;">Band 5.5 vs 8.5 Upgrade</th>
          <th style="width: 28%;">Meaning & Context</th>
          <th style="width: 32%;">Examiner Model Sentence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Formulate a robust empirical hypothesis</strong></td>
          <td><span style="color: #dc2626;">❌ Make a strong idea</span><br><span style="color: #166534; font-weight: bold;">✅ Empirical hypothesis</span></td>
          <td>Construct a verifiable, scientifically grounded proposition for testing.</td>
          <td><em>"The research cohort <strong>formulated a robust empirical hypothesis</strong> examining urban microclimate heat islands."</em></td>
        </tr>
        <tr>
          <td><strong>Corroborate quantitative findings</strong></td>
          <td><span style="color: #dc2626;">❌ Prove the numbers</span><br><span style="color: #166534; font-weight: bold;">✅ Corroborate findings</span></td>
          <td>Provide independent numerical evidence that confirms initial findings.</td>
          <td><em>"Subsequent multi-center clinical trials <strong>corroborated the quantitative findings</strong> of the original pilot study."</em></td>
        </tr>
        <tr>
          <td><strong>Scrutinize methodological validity</strong></td>
          <td><span style="color: #dc2626;">❌ Check if tests are good</span><br><span style="color: #166534; font-weight: bold;">✅ Methodological validity</span></td>
          <td>Critically inspect experimental design, sampling protocols, and rigor.</td>
          <td><em>"Peer reviewers must <strong>scrutinize methodological validity</strong> before conclusions are accepted into the scientific canon."</em></td>
        </tr>
        <tr>
          <td><strong>Synthesize disparate theoretical frameworks</strong></td>
          <td><span style="color: #dc2626;">❌ Combine different ideas</span><br><span style="color: #166534; font-weight: bold;">✅ Synthesize frameworks</span></td>
          <td>Unite diverging scholarly theories into a coherent, overarching model.</td>
          <td><em>"The dissertation successfully <strong>synthesizes disparate theoretical frameworks</strong> from institutional economics and sociology."</em></td>
        </tr>
        <tr>
          <td><strong>Delineate the scope of investigation</strong></td>
          <td><span style="color: #dc2626;">❌ Show limits of study</span><br><span style="color: #166534; font-weight: bold;">✅ Delineate scope</span></td>
          <td>Explicitly define the specific parameters and boundaries of an inquiry.</td>
          <td><em>"The introductory chapter clearly <strong>delineates the scope of investigation</strong> to post-war South Asian trade pacts."</em></td>
        </tr>
        <tr>
          <td><strong>Substantiate qualitative assertions</strong></td>
          <td><span style="color: #dc2626;">❌ Give proof for claims</span><br><span style="color: #166534; font-weight: bold;">✅ Substantiate assertions</span></td>
          <td>Back subjective arguments with credible observational or documentary evidence.</td>
          <td><em>"Candidates must <strong>substantiate qualitative assertions</strong> with concrete historical case studies in Task 2 essays."</em></td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      Domain 6: Society, Education & Human Mobility
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Academic Collocation</th>
          <th style="width: 15%;">Band 5.5 vs 8.5 Upgrade</th>
          <th style="width: 28%;">Meaning & Context</th>
          <th style="width: 32%;">Examiner Model Sentence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Foster socioeconomic upward mobility</strong></td>
          <td><span style="color: #dc2626;">❌ Help poor people grow</span><br><span style="color: #166534; font-weight: bold;">✅ Upward mobility</span></td>
          <td>Enable individuals to transcend class barriers and improve livelihoods.</td>
          <td><em>"Universally accessible tertiary education remains the single most effective vehicle to <strong>foster socioeconomic upward mobility</strong>."</em></td>
        </tr>
        <tr>
          <td><strong>Bridge the pervasive digital divide</strong></td>
          <td><span style="color: #dc2626;">❌ Give internet to poor</span><br><span style="color: #166534; font-weight: bold;">✅ Digital divide</span></td>
          <td>Close the gap between communities with and without modern technology access.</td>
          <td><em>"Subsidized rural fiber-optic broadband is necessary to <strong>bridge the pervasive digital divide</strong>."</em></td>
        </tr>
        <tr>
          <td><strong>Spark heated contentious debate</strong></td>
          <td><span style="color: #dc2626;">❌ Make people argue</span><br><span style="color: #166534; font-weight: bold;">✅ Contentious debate</span></td>
          <td>Ignite passionate, widespread disagreement across public discourse.</td>
          <td><em>"Proposals to raise statutory retirement thresholds continue to <strong>spark heated contentious debate</strong> across industrial labor unions."</em></td>
        </tr>
        <tr>
          <td><strong>Dismantle entrenched social prejudices</strong></td>
          <td><span style="color: #dc2626;">❌ Stop old bad beliefs</span><br><span style="color: #166534; font-weight: bold;">✅ Dismantle prejudices</span></td>
          <td>Eradicate deep-seated systemic discrimination and cultural biases.</td>
          <td><em>"Community-driven civic workshops are critical to <strong>dismantle entrenched social prejudices</strong> against marginalized groups."</em></td>
        </tr>
        <tr>
          <td><strong>Cultivate civic consciousness</strong></td>
          <td><span style="color: #dc2626;">❌ Teach good citizenship</span><br><span style="color: #166534; font-weight: bold;">✅ Civic consciousness</span></td>
          <td>Instill social responsibility, ethical engagement, and community awareness.</td>
          <td><em>"Secondary school curricula should actively <strong>cultivate civic consciousness</strong> through mandatory volunteer service."</em></td>
        </tr>
        <tr>
          <td><strong>Inculcate critical thinking faculties</strong></td>
          <td><span style="color: #dc2626;">❌ Teach students to think</span><br><span style="color: #166534; font-weight: bold;">✅ Inculcate faculties</span></td>
          <td>Develop analytical, independent, and evaluative reasoning skills in learners.</td>
          <td><em>"Modern pedagogies must pivot away from rote memorization to <strong>inculcate critical thinking faculties</strong>."</em></td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      Top 10 Lexical Traps & False Friends (Examiner Checklist)
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Frequent Error (Band 5.5-6.0)</th>
          <th style="width: 25%;">Band 8.5+ Correct Standard</th>
          <th style="width: 50%;">Syntactic Rule & Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span style="color: #dc2626;">❌ "Comprise of"</span></td>
          <td><span style="color: #166534; font-weight: bold;">✅ "Comprise" / "Is composed of"</span></td>
          <td><em>'Comprise'</em> is transitive and never takes <em>'of'</em>: <em>"The cohort comprises 50 subjects"</em> OR <em>"The cohort is composed of 50 subjects."</em></td>
        </tr>
        <tr>
          <td><span style="color: #dc2626;">❌ "Economic" (meaning cheap)</span></td>
          <td><span style="color: #166534; font-weight: bold;">✅ "Economical" (money-saving)</span></td>
          <td><em>'Economic'</em> relates to the economy. <em>'Economical'</em> means cost-effective/thrifty: <em>"Electric vehicles provide an economical alternative."</em></td>
        </tr>
        <tr>
          <td><span style="color: #dc2626;">❌ "Reach to 50%"</span></td>
          <td><span style="color: #166534; font-weight: bold;">✅ "Reach 50%"</span></td>
          <td><em>'Reach'</em> is a transitive verb taking a direct object without prepositions: <em>"Exports reached $45M in 2024."</em></td>
        </tr>
        <tr>
          <td><span style="color: #dc2626;">❌ "Affect on something"</span></td>
          <td><span style="color: #166534; font-weight: bold;">✅ "Have an effect on" / "Affect"</span></td>
          <td><em>'Affect'</em> is a verb (no preposition); <em>'effect'</em> is a noun: <em>"Pollution affects biodiversity"</em> or <em>"Pollution has an effect on biodiversity."</em></td>
        </tr>
        <tr>
          <td><span style="color: #dc2626;">❌ "Rise vs. Raise confusion"</span></td>
          <td><span style="color: #166534; font-weight: bold;">✅ Rise (intransitive) / Raise (transitive)</span></td>
          <td><em>"Prices rose by 10%"</em> (no object); <em>"The government raised interest rates"</em> (requires an object).</td>
        </tr>
        <tr>
          <td><span style="color: #dc2626;">❌ "An increase of percentage"</span></td>
          <td><span style="color: #166534; font-weight: bold;">✅ Percentage vs. Percent (%)</span></td>
          <td>Use <em>'percentage'</em> without digits (<em>"a high percentage of students"</em>); use <em>'percent'</em> with digits (<em>"45 percent of respondents"</em>).</td>
        </tr>
        <tr>
          <td><span style="color: #dc2626;">❌ "Amount of people / cars"</span></td>
          <td><span style="color: #166534; font-weight: bold;">✅ "Number of people / cars"</span></td>
          <td><em>'Amount'</em> is strictly for uncountable nouns (water, money); <em>'number'</em> is for countable plural nouns.</td>
        </tr>
        <tr>
          <td><span style="color: #dc2626;">❌ "Less people / Less students"</span></td>
          <td><span style="color: #166534; font-weight: bold;">✅ "Fewer people / Fewer students"</span></td>
          <td><em>'Fewer'</em> applies to countable items; <em>'less'</em> is reserved for singular non-count quantities (less pollution).</td>
        </tr>
        <tr>
          <td><span style="color: #dc2626;">❌ "Many evidences / researches"</span></td>
          <td><span style="color: #166534; font-weight: bold;">✅ "Abundant evidence / Research studies"</span></td>
          <td><em>'Evidence'</em> and <em>'research'</em> are strictly uncountable mass nouns in standard academic English.</td>
        </tr>
        <tr>
          <td><span style="color: #dc2626;">❌ "According to me"</span></td>
          <td><span style="color: #166534; font-weight: bold;">✅ "From my perspective / In my view"</span></td>
          <td><em>'According to'</em> references third-party sources (e.g. <em>"According to the World Bank..."</em>), never the speaker.</td>
        </tr>
      </tbody>
    </table>
  `;

  const TASK1_DOC_BODY = `
    <div class="callout">
      <div class="callout-title">🎯 Cambridge Task 1 Assessment Framework:</div>
      Achieving Band 8.5+ in Task 1 requires mastering <strong>four dimensions</strong>: 100% accurate preposition syntax, dynamic trajectory vocabulary, mathematical precision (Percentage vs Percentage Points), and nuanced 2-sentence Overview Blueprints.
    </div>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 20px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      1. The 6 Golden Preposition Rules (Grammatical Accuracy)
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 15%;">Preposition</th>
          <th style="width: 30%;">Syntactic Rule & Function</th>
          <th style="width: 55%;">Band 8.5+ Cambridge Model Sentences</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>BY</strong></td>
          <td>Indicates the <strong>numerical margin or difference</strong> between the starting point and finishing point.</td>
          <td>
            • <em>"Outbound garment exports surged <strong>by 18%</strong>, escalating from 42% in 2018 to 60% in 2024."</em><br>
            • <em>"Unemployment was curtailed <strong>by 3.5 percentage points</strong> following fiscal stimulus."</em>
          </td>
        </tr>
        <tr>
          <td><strong>TO</strong></td>
          <td>Indicates the <strong>final arrival endpoint</strong> or destination value reached by the metric.</td>
          <td>
            • <em>"Renewable power capacity expanded steadily, climbing <strong>to 85 gigawatts</strong> by the end of the survey."</em><br>
            • <em>"Oil consumption plunged abruptly <strong>to a historic low of 12 million barrels</strong>."</em>
          </td>
        </tr>
        <tr>
          <td><strong>OF</strong></td>
          <td>Used directly following <strong>nominal trend nouns</strong> (e.g. <em>increase, surge, drop, contraction</em>) or specifying margins.</td>
          <td>
            • <em>"The industrial manufacturing sector registered a marked contraction <strong>of 14 million units</strong>."</em><br>
            • <em>"Urban migration witnessed an unprecedented surge <strong>of 25%</strong> over the decade."</em>
          </td>
        </tr>
        <tr>
          <td><strong>AT</strong></td>
          <td>Indicates a <strong>static point, an initial starting level, or a stable plateau peak</strong>.</td>
          <td>
            • <em>"In 2010, the national literacy rate stood <strong>at 72%</strong>, before ascending progressively."</em><br>
            • <em>"Electric vehicle sales peaked <strong>at 45,000 units</strong> in August before leveling off."</em>
          </td>
        </tr>
        <tr>
          <td><strong>IN / OVER / DURING</strong></td>
          <td>Defines the <strong>time interval, timeframe, or duration</strong> across which the movement occurred.</td>
          <td>
            • <em>"<strong>Over the course of the 15-year period</strong>, solar energy adoption grew eightfold."</em><br>
            • <em>"<strong>During the subsequent five-year interval</strong>, consumer spending remained static."</em><br>
            • <em>"The most pronounced surge occurred <strong>in the final quarter</strong> of 2023."</em>
          </td>
        </tr>
        <tr>
          <td><strong>BETWEEN ... AND vs. FROM ... TO</strong></td>
          <td>Strict paired boundaries for time intervals. <em>(Never write 'Between 2010 to 2020').</em></td>
          <td>
            • <em>"<strong>Between 2015 and 2025</strong>, global smartphone shipments exhibited exponential gains."</em><br>
            • <em>"<strong>From 2018 to 2022</strong>, agricultural revenues underwent a consistent downward slump."</em>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      2. Dynamic Verb, Adverb & Nominal Taxonomy (35+ Terms)
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 22%;">Trajectory Class</th>
          <th style="width: 28%;">Dynamic Verbs (V)</th>
          <th style="width: 25%;">Precision Adverbs (Adv)</th>
          <th style="width: 25%;">Nominal Forms (Noun)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>🚀 Exponential Surge / Steep Ascent</strong></td>
          <td>Soared, skyrocketed, surged exponentially, climbed markedly, escalated sharply</td>
          <td>Exponentially, precipitously, markedly, dramatically, drastically</td>
          <td>An exponential surge, a meteoric rise, a steep upward trajectory, a dramatic escalation</td>
        </tr>
        <tr>
          <td><strong>📈 Steady / Progressive Growth</strong></td>
          <td>Rose steadily, expanded progressively, registered consistent gains, trended upwards</td>
          <td>Steadily, progressively, consistently, incrementally, moderately</td>
          <td>A steady ascent, progressive expansion, consistent growth, an incremental gain</td>
        </tr>
        <tr>
          <td><strong>📉 Severe Collapse / Steep Plunge</strong></td>
          <td>Plummeted, slumped, collapsed abruptly, contracted substantially, dove, tumbled</td>
          <td>Sharply, severely, precipitously, abruptly, dramatically</td>
          <td>A marked contraction, a precipitous slump, a severe collapse, a catastrophic downturn</td>
        </tr>
        <tr>
          <td><strong>↘️ Mild / Modest Reduction</strong></td>
          <td>Dipped marginally, contracted slightly, edged down, softened, receded</td>
          <td>Marginally, slightly, modestly, insignificantly, minimally</td>
          <td>A slight downturn, an inconsequential dip, a marginal softening, a mild contraction</td>
        </tr>
        <tr>
          <td><strong>〰️ Erratic Volatility & Waves</strong></td>
          <td>Oscillated wildly, fluctuated erratically, underwent turbulence, moved cyclically</td>
          <td>Erratically, wildly, unpredictably, continuously, unevenly</td>
          <td>Marked volatility, wild oscillations, erratic fluctuations, wave-like cycles</td>
        </tr>
        <tr>
          <td><strong>⏹️ Plateau & Absolute Stability</strong></td>
          <td>Plateaued at, stabilized around, leveled off at, remained unchanged, stagnated</td>
          <td>Relatively, virtually, essentially, consistently</td>
          <td>A plateau phase, a period of stabilization, a flatline trend, an equilibrium</td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      3. Critical Mathematical Distinction: Percent (%) vs. Percentage Point (pp)
    </h2>
    <div class="callout">
      <div class="callout-title">⚠️ The Number 1 Data Reporting Trap in Task 1:</div>
      If a literacy rate rises from <strong>20% to 30%</strong>:<br>
      • <span style="color: #166534; font-weight: bold;">Percentage Points:</span> It rose by <strong>10 percentage points</strong> (30 - 20 = 10 pp).<br>
      • <span style="color: #166534; font-weight: bold;">Percent Growth:</span> It grew by <strong>50 percent</strong> [(30 - 20) / 20 * 100 = 50%].<br>
      <br>
      <em>Examiner Model Sentence:</em> <em>"Although urban electrification increased by only <strong>10 percentage points</strong> (from 20% to 30%), this represented an impressive <strong>50% expansion</strong> in total electrified households."</em>
    </div>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      4. The 5 Complete Overview Formula Blueprints (Band 9)
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Chart Architecture</th>
          <th style="width: 75%;">Plug-and-Play Band 9 Overview Blueprint</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Blueprint 1: Dynamic Two-Trajectory Trend (Line / Bar Time Series)</strong></td>
          <td><em>"Overall, it is immediately manifest that while <strong>[Category A]</strong> and <strong>[Category B]</strong> experienced sustained upward trajectories over the surveyed span, <strong>[Category C]</strong> underwent a marked contraction. Furthermore, <strong>[Category A]</strong> remained the preeminent contributor throughout the entire timeframe."</em></td>
        </tr>
        <tr>
          <td><strong>Blueprint 2: Static Comparative Distribution (Pie / Bar Snapshot)</strong></td>
          <td><em>"In summary, what stands out from the data is that <strong>[Category A]</strong> accounted for the lion's share of overall figures, dwarfing all other sectors combined. In sharp contrast, <strong>[Category D]</strong> represented an almost negligible fraction of the aggregate total."</em></td>
        </tr>
        <tr>
          <td><strong>Blueprint 3: Two-Chart Complex Synthesis (e.g. Line Graph + Pie Chart)</strong></td>
          <td><em>"Overall, while the line graph indicates a steady long-term escalation in total expenditure across all demographics, the accompanying pie chart underscores that housing and food consumption constituted the vast majority of consumer allocations."</em></td>
        </tr>
        <tr>
          <td><strong>Blueprint 4: Industrial / Natural Process Diagram</strong></td>
          <td><em>"Overall, the process comprises <strong>[Number]</strong> distinct sequential stages, commencing with the initial harvesting/intake of <strong>[Raw Material]</strong> and culminating in the automated distribution of the refined end product to retail markets."</em></td>
        </tr>
        <tr>
          <td><strong>Blueprint 5: Outlier / Anomaly-Driven Overview</strong></td>
          <td><em>"Overall, across nearly all surveyed territories, renewable adoption registered significant proportional gains, with <strong>[Country X]</strong> serving as the sole notable exception by exhibiting a continuous downward trend."</em></td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      5. Band 9 Task 1 Cohesive Sentence Templates (Body Paragraphs)
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Syntactic Objective</th>
          <th style="width: 75%;">Band 8.5+ Model Sentence Pattern</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Participial Clause with 'Accounting for'</strong></td>
          <td><em>"Fossil fuels remained the dominant power source throughout the decade, <strong>accounting for nearly two-thirds (64%)</strong> of national energy output in 2020."</em></td>
        </tr>
        <tr>
          <td><strong>Comparative Eclipse / Overtaking</strong></td>
          <td><em>"In 2021, investments in solar infrastructure <strong>eclipsed those in hydroelectric power for the first time</strong>, climbing to $4.2 billion against $3.8 billion."</em></td>
        </tr>
        <tr>
          <td><strong>Proportional Multiplier</strong></td>
          <td><em>"Figures for outbound cargo in Port A were <strong>nearly triple those registered by Port B</strong> ($75M and $26M, respectively)."</em></td>
        </tr>
        <tr>
          <td><strong>Subordinate Contrast Construction</strong></td>
          <td><em>"<strong>While the proportion of rural internet users climbed sharply</strong> from 15% to 58%, the corresponding metric for urban centers experienced a much milder ascent."</em></td>
        </tr>
        <tr>
          <td><strong>Time Transition with Nominal Subject</strong></td>
          <td><em>"<strong>Turning to the latter half of the surveyed period</strong>, a sharp divergence occurred as manufacturing output contracted to a decade-low of 12,000 units."</em></td>
        </tr>
        <tr>
          <td><strong>Respectively Suffix Syntax</strong></td>
          <td><em>"Revenues for Region North and Region South stood at <strong>$14.2M and $9.8M, respectively</strong>, prior to the economic downturn."</em></td>
        </tr>
        <tr>
          <td><strong>Static Extremum Identification</strong></td>
          <td><em>"Of all surveyed European nations, Sweden displayed the <strong>highest propensity for cashless transactions</strong>, whereas Greece occupied the lowest tier."</em></td>
        </tr>
      </tbody>
    </table>
  `;

  const SPEAKING_DOC_BODY = `
    <div class="callout">
      <div class="callout-title">🎙️ Cambridge IELTS Speaking Band 9 Fluency Architecture:</div>
      Achieving Band 8.5-9.0 in IELTS Speaking does not mean speaking rapidly without breathing. Examiners evaluate <strong>Fluency & Coherence</strong> (natural discourse markers, lack of unnatural silence), <strong>Lexical Resource</strong> (idiomatic collocations, precise metaphors), and <strong>Grammatical Range</strong> (inverted conditionals, complex subordinate clauses).
    </div>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 20px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      1. Perspective & Abstract Opinion Framing (Replacing "I think / In my opinion")
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 35%;">Band 9 Discourse Framer</th>
          <th style="width: 65%;">Spoken Demonstration & Context</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>"From where I stand, it seems abundantly clear that..."</strong></td>
          <td><em>"<strong>From where I stand, it seems abundantly clear that</strong> remote working models have permanently reshaped urban commuting patterns."</em></td>
        </tr>
        <tr>
          <td><strong>"As far as I can gather, prevailing consensus suggests..."</strong></td>
          <td><em>"<strong>As far as I can gather, prevailing consensus suggests</strong> that artificial intelligence will augment white-collar productivity rather than eradicate it."</em></td>
        </tr>
        <tr>
          <td><strong>"If one examines the broader socioeconomic landscape..."</strong></td>
          <td><em>"<strong>If one examines the broader socioeconomic landscape</strong>, subsidized public transportation delivers far greater dividends than highway expansion."</em></td>
        </tr>
        <tr>
          <td><strong>"I am firmly of the conviction that..."</strong></td>
          <td><em>"<strong>I am firmly of the conviction that</strong> childhood digital literacy must be balanced with foundational cognitive problem-solving."</em></td>
        </tr>
        <tr>
          <td><strong>"Looking at this through a pragmatic lens..."</strong></td>
          <td><em>"<strong>Looking at this through a pragmatic lens</strong>, complete plastic bans are unworkable without scalable biodegradable packaging substitutes."</em></td>
        </tr>
        <tr>
          <td><strong>"It is widely recognized among sociologists that..."</strong></td>
          <td><em>"<strong>It is widely recognized among sociologists that</strong> urbanization accelerates cultural homogenization across younger demographics."</em></td>
        </tr>
        <tr>
          <td><strong>"From an empirical standpoint, the general trajectory indicates..."</strong></td>
          <td><em>"<strong>From an empirical standpoint, the general trajectory indicates</strong> that nations prioritizing renewable R&D experience long-term economic resilience."</em></td>
        </tr>
        <tr>
          <td><strong>"I am inclined to believe that while initial appearances suggest X, reality favors Y..."</strong></td>
          <td><em>"<strong>I am inclined to believe that while initial appearances suggest</strong> cost is the main barrier, the real hurdle is public skepticism."</em></td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      2. Native 2-Second Thinking Buffers (Eliminating Unnatural Pauses & "Umm")
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 35%;">Thinking Buffer (Zero Silence)</th>
          <th style="width: 65%;">When & How to Deploy Naturally</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>"That is a remarkably multifaceted question, but looking at..."</strong></td>
          <td>Use on broad Part 3 societal questions to organize thoughts while maintaining 100% fluent speech cadence.</td>
        </tr>
        <tr>
          <td><strong>"To be completely candid, I haven't contemplated that specific angle deeply before, but..."</strong></td>
          <td>Use when the examiner asks an unexpected or abstract hypothetical question.</td>
        </tr>
        <tr>
          <td><strong>"That depends heavily on the societal context, however generally speaking..."</strong></td>
          <td>Use when asked a binary question (e.g. <em>"Is technology good or bad?"</em>) to showcase nuance.</td>
        </tr>
        <tr>
          <td><strong>"That is an intriguing dilemma; let me unpack the most salient dimension first..."</strong></td>
          <td>Gives you 3 seconds of continuous native flow while you select your primary argument.</td>
        </tr>
        <tr>
          <td><strong>"Well, there are two distinct ways to look at this issue..."</strong></td>
          <td>Sets up an automatic 2-part balanced answer that impresses the examiner with structured thinking.</td>
        </tr>
        <tr>
          <td><strong>"Off the top of my head, I would say the most prominent factor is..."</strong></td>
          <td>Perfect for spontaneous opinion delivery without hesitating for data or formal statistics.</td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      3. Part 3 Nuance, Counter-argument & Concession Connectors
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 30%;">Argumentative Goal</th>
          <th style="width: 70%;">Band 9 Spoken Discourse Connector & Model</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Acknowledging Partial Validity</strong></td>
          <td><em>"<strong>While there is indisputable validity to that premise, one cannot overlook</strong> the systemic barriers low-income families face."</em></td>
        </tr>
        <tr>
          <td><strong>Weighing Long-term Fallout</strong></td>
          <td><em>"<strong>Notwithstanding the immediate economic windfall, the long-term ecological fallout</strong> could prove catastrophic for coastal fisheries."</em></td>
        </tr>
        <tr>
          <td><strong>Demarcating Theory vs. Practice</strong></td>
          <td><em>"<strong>That policy holds substantial merit on paper; however, in practical execution</strong>, regulatory enforcement remains deeply inconsistent."</em></td>
        </tr>
        <tr>
          <td><strong>Challenging Oversimplifications</strong></td>
          <td><em>"<strong>It would be a gross oversimplification to attribute this solely to</strong> financial incentives, given the deep-rooted cultural dimensions."</em></td>
        </tr>
        <tr>
          <td><strong>Contrasting Urban vs. Rural</strong></td>
          <td><em>"<strong>While that may hold true in metropolitan centers, the dynamic in rural communities</strong> presents a diametrically opposed reality."</em></td>
        </tr>
        <tr>
          <td><strong>Reframing Perspective</strong></td>
          <td><em>"<strong>To put that into sharper perspective</strong>, if we look at historical parallels from the industrial revolution, similar apprehensions arose."</em></td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      4. Inverted & Speculative Conditionals for Speaking (Band 9 Grammar Score)
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 30%;">Conditional Structure</th>
          <th style="width: 70%;">Examiner-Level Spoken Model</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Inverted Past Unfulfilled (Had + Subject + Past Participle)</strong></td>
          <td><em>"<strong>Had governments enacted stricter emissions regulations a decade ago</strong>, urban air pollution wouldn't be anywhere near as severe today."</em></td>
        </tr>
        <tr>
          <td><strong>Inverted Hypothetical Present (Were + Subject + to Verb)</strong></td>
          <td><em>"<strong>Were municipal authorities to heavily subsidize electric public transport</strong>, private vehicular congestion would diminish rapidly."</em></td>
        </tr>
        <tr>
          <td><strong>Inverted Future Possibility (Should + Subject + Verb)</strong></td>
          <td><em>"<strong>Should global temperatures continue to rise unabated</strong>, low-lying coastal cities will inevitably face existential displacement."</em></td>
        </tr>
        <tr>
          <td><strong>Personal Policy Speculation (Were I placed in...)</strong></td>
          <td><em>"<strong>Were I placed in a policymaking capacity</strong>, my immediate priority would be restructuring vocational apprenticeships for youth."</em></td>
        </tr>
      </tbody>
    </table>

    <h2 style="font-size: 15px; font-weight: 800; color: #0f766e; margin-top: 24px; margin-bottom: 8px; border-bottom: 2px solid #ccfbf1; padding-bottom: 4px;">
      5. Top 12 High-Scoring Idiomatic Phrasal Chunks & Metaphors
    </h2>
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Idiomatic Chunk</th>
          <th style="width: 30%;">Academic / Formal Meaning</th>
          <th style="width: 45%;">Band 9 Spoken Demonstration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>A double-edged sword</strong></td>
          <td>Something that has both advantages and disadvantages.</td>
          <td><em>"Social media is undeniably <strong>a double-edged sword</strong>—it democratizes information while fueling misinformation."</em></td>
        </tr>
        <tr>
          <td><strong>A watershed moment</strong></td>
          <td>A decisive turning point that marks a historical divide.</td>
          <td><em>"The transition to online education during the pandemic marked <strong>a watershed moment</strong> for global pedagogy."</em></td>
        </tr>
        <tr>
          <td><strong>A silver bullet</strong></td>
          <td>A simple, magic solution to a highly complex challenge.</td>
          <td><em>"Electric vehicles are important, but they are certainly not <strong>a silver bullet</strong> for overall carbon reduction."</em></td>
        </tr>
        <tr>
          <td><strong>Weather the storm</strong></td>
          <td>Successfully survive a challenging economic or social crisis.</td>
          <td><em>"Only enterprises with agile digital infrastructure were able to <strong>weather the economic storm</strong>."</em></td>
        </tr>
        <tr>
          <td><strong>A catalyst for change</strong></td>
          <td>A factor that accelerates a substantial structural evolution.</td>
          <td><em>"Youth-led grassroots activism has acted as <strong>a potent catalyst for change</strong> in climate policy."</em></td>
        </tr>
        <tr>
          <td><strong>A zero-sum game</strong></td>
          <td>A situation where one party's gain equals another's loss.</td>
          <td><em>"International trade negotiations should aim for win-win synergy rather than treating commerce as <strong>a zero-sum game</strong>."</em></td>
        </tr>
        <tr>
          <td><strong>Tip the balance / scales</strong></td>
          <td>Provide the decisive factor that determines the final outcome.</td>
          <td><em>"Targeted student mentorship programs could <strong>tip the balance</strong> in favor of marginalized university applicants."</em></td>
        </tr>
        <tr>
          <td><strong>A cautionary tale</strong></td>
          <td>An event or story that serves as a warning against mistakes.</td>
          <td><em>"The rapid collapse of single-industry factory towns stands as <strong>a sobering cautionary tale</strong> for modern urban planners."</em></td>
        </tr>
        <tr>
          <td><strong>Pave the way for</strong></td>
          <td>Create conditions that make future progress straightforward.</td>
          <td><em>"Breakthroughs in battery energy density will <strong>pave the way for</strong> zero-emission commercial aviation."</em></td>
        </tr>
        <tr>
          <td><strong>Strike a delicate balance</strong></td>
          <td>Carefully maintain equilibrium between conflicting priorities.</td>
          <td><em>"Urban authorities must <strong>strike a delicate balance</strong> between preserving historical architecture and building modern housing."</em></td>
        </tr>
        <tr>
          <td><strong>At the eleventh hour</strong></td>
          <td>At the latest possible moment before a crisis occurs.</td>
          <td><em>"Environmental treaties are often finalized <strong>at the eleventh hour</strong> due to protracted diplomatic negotiations."</em></td>
        </tr>
        <tr>
          <td><strong>Reap the dividends</strong></td>
          <td>Enjoy the long-term benefits resulting from earlier investments.</td>
          <td><em>"Countries that invested early in STEM education are now <strong>reaping immense economic dividends</strong>."</em></td>
        </tr>
      </tbody>
    </table>
  `;

  useEffect(() => {
    document.title = 'IELTS Band 8.5 Master Preparation Hub | Free Interactive Practice & Simulators | DH Shishir';
  }, []);

  const [toolFilter, setToolFilter] = useState<'all' | 'phase1' | 'phase2' | 'phase3' | 'phase4' | 'listening' | 'reading' | 'writing' | 'speaking'>('all');

  const toolsList = [
    // --- PHASE 1: DAYS 1–30 (FOUNDATION & LEXICON BASE) ---
    {
      id: 'daily-drill-tracker',
      stepNumber: 1,
      stepLabel: 'Step 01',
      phase: 1,
      phaseTitle: 'Phase 1: Days 1–30',
      phaseCategory: 'phase1' as const,
      module: 'Roadmap & Vocab' as const,
      name: '120-Day Action Roadmap & Error Vault',
      tagline: '120-day milestone checklist, sprint filters & 1:2 forensic error log',
      icon: Calendar,
      badge: 'Master Planner',
      colorClass: 'from-teal-600 to-emerald-600',
      component: IeltsDailyDrillTracker
    },
    {
      id: 'score-estimator',
      stepNumber: 2,
      stepLabel: 'Step 02',
      phase: 1,
      phaseTitle: 'Phase 1: Days 1–30',
      phaseCategory: 'phase1' as const,
      module: 'Roadmap & Vocab' as const,
      name: 'Band Score Diagnostic & Target Converter',
      tagline: 'Instant raw-to-band score conversion for Academic & GT test formats',
      icon: Award,
      badge: 'Diagnostic Lab',
      colorClass: 'from-amber-600 to-yellow-600',
      component: IeltsScoreEstimator
    },
    {
      id: 'collocation-duel',
      stepNumber: 3,
      stepLabel: 'Step 03',
      phase: 1,
      phaseTitle: 'Phase 1: Days 1–30',
      phaseCategory: 'phase1' as const,
      module: 'Roadmap & Vocab' as const,
      name: 'Band 9 Collocation Speed Duel',
      tagline: '60s Speed arcade & Band 5➔9 academic sentence morphing dial',
      icon: Zap,
      badge: 'Speed Arcade',
      colorClass: 'from-sky-600 to-cyan-600',
      component: IeltsCollocationDuel
    },

    // --- PHASE 2: DAYS 31–60 (RECEPTIVE RIGOR: LISTENING & READING LAB) ---
    {
      id: 'listening-simulator',
      stepNumber: 4,
      stepLabel: 'Step 04',
      phase: 2,
      phaseTitle: 'Phase 2: Days 31–60',
      phaseCategory: 'phase2' as const,
      module: 'Listening' as const,
      name: '4-Section Academic Listening Exam',
      tagline: 'Authentic Cambridge exam with 1.0x-1.25x speed & modular section grading',
      icon: Volume2,
      badge: 'Audio Simulator',
      colorClass: 'from-indigo-600 to-blue-600',
      component: IeltsListeningExamEngine
    },
    {
      id: 'reading-lab',
      stepNumber: 5,
      stepLabel: 'Step 05',
      phase: 2,
      phaseTitle: 'Phase 2: Days 31–60',
      phaseCategory: 'phase2' as const,
      module: 'Reading' as const,
      name: 'Split-Screen Academic Reading Lab',
      tagline: 'Passage highlighter, timed 3-passage lab & forensic logic evaluation',
      icon: BookOpen,
      badge: 'Split-Screen Lab',
      colorClass: 'from-emerald-600 to-teal-600',
      component: IeltsReadingExamEngine
    },
    {
      id: 'tfng-court',
      stepNumber: 6,
      stepLabel: 'Step 06',
      phase: 2,
      phaseTitle: 'Phase 2: Days 31–60',
      phaseCategory: 'phase2' as const,
      module: 'Reading' as const,
      name: 'Reading T/F/NG Forensic Court',
      tagline: 'Forensic evidence courtroom, qualifier microscope & logical trap analysis',
      icon: Scale,
      badge: 'Reading Logic',
      colorClass: 'from-violet-600 to-purple-600',
      component: IeltsTfngCourtroom
    },

    // --- PHASE 3: DAYS 61–90 (PRODUCTIVE MASTERY: WRITING TASK 1 & 2) ---
    {
      id: 'writing-scanner',
      stepNumber: 7,
      stepLabel: 'Step 07',
      phase: 3,
      phaseTitle: 'Phase 3: Days 61–90',
      phaseCategory: 'phase3' as const,
      module: 'Writing' as const,
      name: 'Handwritten Paper Essay Scanner & Grader',
      tagline: 'Snap paper photo with mobile & get instant 4-pillar Cambridge evaluation',
      icon: Camera,
      badge: 'Paper OCR Scanner',
      colorClass: 'from-rose-600 to-pink-600',
      component: IeltsHandwrittenEssayScanner
    },
    {
      id: 'writing-analyzer',
      stepNumber: 8,
      stepLabel: 'Step 08',
      phase: 3,
      phaseTitle: 'Phase 3: Days 61–90',
      phaseCategory: 'phase3' as const,
      module: 'Writing' as const,
      name: 'Writing Task 2 Cambridge 4-Pillar Evaluator',
      tagline: 'TR, CC, LR & GRA rubric analyzer & AWL lexical density scanner',
      icon: FileText,
      badge: '4-Pillar Rubric',
      colorClass: 'from-amber-600 to-orange-600',
      component: IeltsWritingAnalyzer
    },
    {
      id: 'task1-morpher',
      stepNumber: 9,
      stepLabel: 'Step 09',
      phase: 3,
      phaseTitle: 'Phase 3: Days 61–90',
      phaseCategory: 'phase3' as const,
      module: 'Writing' as const,
      name: 'Academic Task 1 Dynamic Chart Morpher',
      tagline: 'Interactive SVG sandbox & automated Band 9 overview sentence generator',
      icon: BarChart3,
      badge: 'SVG Sandbox',
      colorClass: 'from-teal-600 to-cyan-600',
      component: IeltsTask1ChartMorpher
    },

    // --- PHASE 4: DAYS 91–120 (PEAK CADENCE: SPEAKING & FINAL SIMULATIONS) ---
    {
      id: 'speaking-radar',
      stepNumber: 10,
      stepLabel: 'Step 10',
      phase: 4,
      phaseTitle: 'Phase 4: Days 91–120',
      phaseCategory: 'phase4' as const,
      module: 'Speaking' as const,
      name: 'Speaking Flow & Speech Cadence Radar',
      tagline: 'Live speech cadence visualizer, WPM radar & 15s reflex speech drill',
      icon: Mic,
      badge: 'AI Audio Radar',
      colorClass: 'from-fuchsia-600 to-pink-600',
      component: IeltsSpeakingFlowRadar
    },
    {
      id: 'speaking-cue-timer',
      stepNumber: 11,
      stepLabel: 'Step 11',
      phase: 4,
      phaseTitle: 'Phase 4: Days 91–120',
      phaseCategory: 'phase4' as const,
      module: 'Speaking' as const,
      name: 'Speaking Part 2 Cue Card Exam Simulator',
      tagline: 'Official 60s prep + 2-minute speaking countdown timer with notes',
      icon: Clock,
      badge: 'Exam Timer',
      colorClass: 'from-blue-600 to-teal-600',
      component: IeltsSpeakingSimulator
    }
  ];

  const activeTool = toolsList.find(t => t.id === selectedToolId) || toolsList[0];
  const ActiveToolComponent = activeTool.component;

  const currentToolIndex = toolsList.findIndex(t => t.id === activeTool.id);
  const prevTool = currentToolIndex > 0 ? toolsList[currentToolIndex - 1] : null;
  const nextTool = currentToolIndex < toolsList.length - 1 ? toolsList[currentToolIndex + 1] : null;

  const handleSelectTool = (toolId: string) => {
    setSelectedToolId(toolId);
    const element = document.getElementById('active-tool-workspace');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredTools = toolsList.filter(tool => {
    if (toolFilter === 'all') return true;
    if (toolFilter === 'phase1') return tool.phase === 1;
    if (toolFilter === 'phase2') return tool.phase === 2;
    if (toolFilter === 'phase3') return tool.phase === 3;
    if (toolFilter === 'phase4') return tool.phase === 4;
    if (toolFilter === 'listening') return tool.module === 'Listening';
    if (toolFilter === 'reading') return tool.module === 'Reading';
    if (toolFilter === 'writing') return tool.module === 'Writing';
    if (toolFilter === 'speaking') return tool.module === 'Speaking';
    return true;
  });

  const handleGenerateRoadmap = () => {
    setGeneratedPlan(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* HERO SECTION */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-teal-950 via-slate-900 to-teal-900 text-white rounded-3xl shadow-2xl relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 100% Free Global Academic Hub
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
              Cambridge & IDP Aligned
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold">
              UCC Senior Lecturer (7+ Yrs Pedagogy)
            </span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              IELTS Band 8.5+ Master Preparation Hub
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Master the Cambridge IELTS exam with structured 120-day diagnostic engines, SVG graph sandboxes, real-time speech cadence radars, and forensic reading logic gates. No paywalls, no login barriers.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-4xl">
            <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xs">
              <div className="text-2xl font-black text-teal-300">11 Engines</div>
              <div className="text-[11px] text-slate-300">120-Day Practice Suite</div>
            </div>
            <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xs">
              <div className="text-2xl font-black text-amber-300">300+ Pairs</div>
              <div className="text-[11px] text-slate-300">Band 9 Collocations</div>
            </div>
            <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xs">
              <div className="text-2xl font-black text-emerald-300">100% Free</div>
              <div className="text-[11px] text-slate-300">No Subscription</div>
            </div>
            <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xs">
              <div className="text-2xl font-black text-sky-300">Anki Vault</div>
              <div className="text-[11px] text-slate-300">1-Click Deck Exports</div>
            </div>
          </div>
        </div>

        {/* RECOMMENDED OFFICIAL & LIVE IELTS COURSES BANNER */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-teal-950 via-slate-900 to-teal-900 rounded-3xl border border-teal-800/40 text-white shadow-xl space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-teal-800/60 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                Official Recommended Programs
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Top-Rated IELTS Live Batches & Cambridge Mock Test Packages
              </h3>
            </div>
            <span className="text-xs text-slate-300 font-medium shrink-0">10 Minute School Aligned</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Live Batch */}
            <div className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition space-y-3 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-400/30">
                  Live Interactive Batch
                </span>
                <h4 className="font-black text-white text-base">IELTS LIVE Batch</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Real-time interactive live coaching, line-by-line Writing mock evaluations, 1-on-1 Speaking interviews, and peer study groups.
                </p>
              </div>
              <a
                href="https://10ms.io/hKLSB8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <span>🔥 Join IELTS LIVE Batch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2: Mock Tests */}
            <div className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition space-y-3 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  Full-Length Mocks
                </span>
                <h4 className="font-black text-white text-base">Reading & Listening Mock Tests</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Authentic computer-delivered timed mock tests mirroring real IDP/British Council exam format with instant scaled band scoring.
                </p>
              </div>
              <a
                href="https://10ms.io/eKLSMe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <span>📝 Start Mock Tests</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 3: Complete Master Course */}
            <div className="p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition space-y-3 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  Comprehensive Masterclass
                </span>
                <h4 className="font-black text-white text-base">Complete IELTS Master Course</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Self-paced modular video course by Munzereen Shahid covering all 4 modules, Band 9 templates, and grammar essentials.
                </p>
              </div>
              <a
                href="https://10ms.io/FKLSLS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition border border-white/20"
              >
                <span>Explore Master Course</span>
                <ExternalLink className="w-3.5 h-3.5 text-teal-300" />
              </a>
            </div>
          </div>
        </div>

        {/* IN-PAGE DAILY MISSION & GOOGLE SIGN-IN BANNER */}
        <div data-nosnippet>
          <DailyMissionNotification
            user={user}
            onOpenAuthModal={onOpenAuthModal}
            onLaunchDayDrill={handleLaunchDayDrill}
            onNavigateDashboard={onNavigateDashboard}
          />
        </div>

        {/* MAIN MODULE NAVIGATION TABS */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveMainTab('tools')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeMainTab === 'tools'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Zap className="w-4 h-4" /> 1. Interactive 120-Day Practice Suite (11)
          </button>
          <button
            onClick={() => setActiveMainTab('roadmap')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeMainTab === 'roadmap'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Compass className="w-4 h-4" /> 2. Band 8.5 Study Roadmap Generator
          </button>
          <button
            onClick={() => setActiveMainTab('masterclass')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeMainTab === 'masterclass'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" /> 3. Examiner Masterclass Guides
          </button>
          <button
            onClick={() => setActiveMainTab('resources')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeMainTab === 'resources'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Download className="w-4 h-4" /> 4. Free Anki Decks & Vault
          </button>
        </div>

        {/* TAB 1: INTERACTIVE SIMULATORS SUITE */}
        {activeMainTab === 'tools' && (
          <div className="space-y-8">
            
            {/* 120-DAY PEDAGOGICAL PHASES NAVIGATOR */}
            <div className="p-6 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl border border-teal-800/40 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-teal-800/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-amber-400 text-slate-950 rounded-xl font-black text-xs">
                    120D
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">
                      120-Day Pedagogical Progression Architecture
                    </h3>
                    <p className="text-xs text-slate-300">
                      Follow the sequential 4-phase master curve to build Band 8.5+ test reflexes step by step.
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-teal-300 bg-white/10 px-3 py-1 rounded-full w-fit">
                  11 Specialized Simulators
                </div>
              </div>

              {/* 4 Phase Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                {[
                  { key: 'phase1', label: 'Phase 1: Days 1–30', subtitle: 'Foundation & Lexicon Base', count: '3 Tools', icon: '🌱' },
                  { key: 'phase2', label: 'Phase 2: Days 31–60', subtitle: 'Receptive Rigor (L & R)', count: '3 Tools', icon: '🎧' },
                  { key: 'phase3', label: 'Phase 3: Days 61–90', subtitle: 'Productive Mastery (Writing)', count: '3 Tools', icon: '✍️' },
                  { key: 'phase4', label: 'Phase 4: Days 91–120', subtitle: 'Peak Cadence (Speaking & Mocks)', count: '2 Tools', icon: '🎙️' }
                ].map(phaseItem => {
                  const isActive = toolFilter === phaseItem.key;
                  return (
                    <button
                      key={phaseItem.key}
                      onClick={() => setToolFilter(isActive ? 'all' : (phaseItem.key as any))}
                      className={`p-3.5 rounded-2xl border text-left transition cursor-pointer space-y-1 relative ${
                        isActive
                          ? 'bg-teal-800/90 border-teal-400 shadow-md ring-2 ring-teal-400/40'
                          : 'bg-white/5 hover:bg-white/10 border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                          <span>{phaseItem.icon}</span> {phaseItem.label}
                        </span>
                        <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-2 py-0.5 rounded-full">
                          {phaseItem.count}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-white">{phaseItem.subtitle}</div>
                    </button>
                  );
                })}
              </div>

              {/* Filter Pills Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-teal-800/40">
                <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5 text-teal-400" /> Filter Sequence:
                </span>

                {[
                  { id: 'all', label: '🌟 Full 120-Day Sequence (11)' },
                  { id: 'listening', label: '🎧 Listening (1)' },
                  { id: 'reading', label: '📖 Reading (2)' },
                  { id: 'writing', label: '✍️ Writing (3)' },
                  { id: 'speaking', label: '🎙️ Speaking (2)' },
                  { id: 'phase1', label: '🌱 Phase 1 Only (3)' },
                  { id: 'phase2', label: '🎧 Phase 2 Only (3)' },
                  { id: 'phase3', label: '✍️ Phase 3 Only (3)' },
                  { id: 'phase4', label: '🎙️ Phase 4 Only (2)' }
                ].map(f => (
                  <button
                    key={f.id}
                    onClick={() => setToolFilter(f.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      toolFilter === f.id
                        ? 'bg-amber-400 text-slate-950 shadow-sm font-black'
                        : 'bg-white/10 hover:bg-white/20 text-slate-200'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* SEQUENTIAL TOOLS GRID */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <ListOrdered className="w-4 h-4 text-teal-700" />
                  <span>Curriculum Steps ({filteredTools.length} Simulators in Sequence)</span>
                </div>
                <span className="text-xs text-slate-500">
                  Click any simulator card to launch below
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {filteredTools.map(tool => {
                  const Icon = tool.icon;
                  const isSelected = selectedToolId === tool.id;

                  return (
                    <button
                      key={tool.id}
                      onClick={() => handleSelectTool(tool.id)}
                      className={`p-4 rounded-3xl border-2 text-left transition-all duration-200 cursor-pointer space-y-2.5 flex flex-col justify-between relative ${
                        isSelected
                          ? 'bg-gradient-to-br from-teal-950 to-slate-900 text-white border-teal-500 shadow-xl ring-2 ring-teal-500/30'
                          : 'bg-white hover:bg-slate-50 hover:border-slate-300 border-slate-200 text-slate-800 shadow-xs'
                      }`}
                    >
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between w-full">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          isSelected 
                            ? 'bg-amber-400 text-slate-950 shadow-xs' 
                            : 'bg-teal-50 text-teal-800 border border-teal-200'
                        }`}>
                          {tool.stepLabel}
                        </span>

                        <span className={`text-[10px] font-medium ${isSelected ? 'text-teal-200' : 'text-slate-500'}`}>
                          {tool.phaseTitle.split(':')[0]}
                        </span>
                      </div>

                      {/* Icon + Badge */}
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-2xl shrink-0 ${
                          isSelected 
                            ? 'bg-teal-800 text-teal-200 border border-teal-600' 
                            : 'bg-slate-100 text-teal-900 border border-slate-200'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md ${
                            isSelected 
                              ? 'bg-teal-800/80 text-teal-100 border border-teal-600/60' 
                              : 'bg-slate-100 text-slate-600 border border-slate-200'
                          }`}>
                            {tool.badge}
                          </span>
                          <h4 className={`font-black text-xs sm:text-sm leading-snug mt-1 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                            {tool.name}
                          </h4>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className={`text-[11px] leading-relaxed line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {tool.tagline}
                      </p>

                      {/* Bottom Status / CTA */}
                      <div className={`pt-2 border-t flex items-center justify-between text-[11px] font-bold w-full ${
                        isSelected ? 'border-teal-800 text-amber-300' : 'border-slate-100 text-teal-800'
                      }`}>
                        <span>{isSelected ? '● Active Engine' : 'Launch Simulator'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-0.5 text-amber-300' : 'text-slate-400'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTIVE EMBEDDED TOOL WORKSPACE */}
            <div id="active-tool-workspace" className="pt-4 space-y-4">
              
              {/* Active Workspace Header Bar with Sequential Next/Prev */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-xl bg-amber-400 text-slate-950 font-black text-xs">
                    {activeTool.stepLabel}
                  </span>
                  <div>
                    <h3 className="font-black text-sm text-white flex items-center gap-2">
                      <span>{activeTool.name}</span>
                      <span className="text-[10px] font-normal text-teal-300 px-2 py-0.5 rounded-full bg-teal-900/60 border border-teal-700">
                        {activeTool.phaseTitle}
                      </span>
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {activeTool.tagline}
                    </p>
                  </div>
                </div>

                {/* Next / Previous Stepper Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  {prevTool && (
                    <button
                      onClick={() => handleSelectTool(prevTool.id)}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                      title={`Go to ${prevTool.name}`}
                    >
                      <span>← {prevTool.stepLabel}</span>
                    </button>
                  )}
                  {nextTool && (
                    <button
                      onClick={() => handleSelectTool(nextTool.id)}
                      className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs font-black transition flex items-center gap-1 shadow-sm cursor-pointer"
                      title={`Go to ${nextTool.name}`}
                    >
                      <span>Next: {nextTool.stepLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Active Embedded Tool Component */}
              <div>
                {selectedToolId === 'daily-drill-tracker' ? (
                  <IeltsDailyDrillTracker onSelectTool={(toolId) => handleSelectTool(toolId)} />
                ) : (
                  <ActiveToolComponent />
                )}
              </div>
            </div>

            {/* In-Page Responsive Ad Unit */}
            <AdSenseBanner slot="7890123456" className="max-w-4xl mx-auto" />
          </div>
        )}

        {/* TAB 2: BAND 8.5 ROADMAP GENERATOR */}
        {activeMainTab === 'roadmap' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Quick Link to 120-Day Action Matrix */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-teal-950 via-slate-900 to-teal-900 text-white rounded-3xl border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-black text-sm shadow-md">
                  120
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Interactive 120-Day Action Plan & Daily Matrix</div>
                  <div className="text-xs text-slate-300 mt-0.5">Explore day-by-day 90-minute blueprints, phase objectives, 30/60/120 sprint filters, and 1:2 error vault.</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedToolId('daily-drill-tracker');
                  setActiveMainTab('tools');
                }}
                className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs rounded-xl transition flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md"
              >
                <Zap className="w-3.5 h-3.5 fill-slate-950" />
                <span>Open 120-Day Action Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xl space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-teal-800" /> Personalized IELTS Band 8.5 Milestone Planner
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Configure your target band and preparation timeframe to synthesize a week-by-week study plan with daily skill quotas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
                <div>
                  <label className="block text-slate-600 mb-1.5">Target Overall Band Score:</label>
                  <select
                    value={targetBand}
                    onChange={e => setTargetBand(parseFloat(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none"
                  >
                    <option value={6.5}>Band 6.5 (Standard Graduate Minimum)</option>
                    <option value={7.0}>Band 7.0 (Top US/UK Universities)</option>
                    <option value={7.5}>Band 7.5 (Top Tier Graduate Admission)</option>
                    <option value={8.0}>Band 8.0 (Teaching / High Scholarship)</option>
                    <option value={8.5}>Band 8.5 (Mastery Tier)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 mb-1.5">Available Timeframe:</label>
                  <select
                    value={examTimeline}
                    onChange={e => setExamTimeline(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none"
                  >
                    <option value="1month">1 Month (Intensive Sprint - 3 hrs/day)</option>
                    <option value="2months">2 Months (Balanced Pace - 2 hrs/day)</option>
                    <option value="3months">3 Months (Deep Foundational - 1.5 hrs/day)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 mb-1.5">Current English Proficiency:</label>
                  <select
                    value={currentLevel}
                    onChange={e => setCurrentLevel(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none"
                  >
                    <option value="intermediate">Intermediate (B1 / Band 5.5-6.0)</option>
                    <option value="upper_intermediate">Upper Intermediate (B2 / Band 6.5)</option>
                    <option value="advanced">Advanced (C1 / Band 7.0-7.5)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleGenerateRoadmap}
                className="w-full py-4 rounded-2xl bg-teal-900 hover:bg-teal-800 text-white font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" /> Synthesize Personalized Milestone Roadmap
              </button>
            </div>

            {generatedPlan && (
              <div className="p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl space-y-6 animate-fadeIn">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs text-teal-400 font-mono">TARGET: BAND {targetBand.toFixed(1)}</span>
                    <h4 className="text-xl font-bold text-white mt-0.5">Your Custom 4-Week Milestone Blueprint</h4>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold">
                    {examTimeline.replace('months', ' Months').replace('month', ' Month')} Sprint
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                    <div className="font-bold text-teal-300 flex items-center gap-1.5">
                      <Zap className="w-4 h-4" /> Week 1–2: Lexical Resource & T/F/NG Logic
                    </div>
                    <ul className="space-y-1.5 text-slate-300 text-[11px]">
                      <li>• Complete 5 rounds daily in the <strong>Band 9 Collocation Duel</strong>.</li>
                      <li>• Solve 3 <strong>T/F/NG Forensic Court</strong> cases daily focusing on quantifier traps.</li>
                      <li>• Memorize 25 Academic Word List (AWL) collocations from our Anki vault.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                    <div className="font-bold text-amber-300 flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4" /> Week 3–4: Task 1 Synthesis & Speaking Reflexes
                    </div>
                    <ul className="space-y-1.5 text-slate-300 text-[11px]">
                      <li>• Practice 20 minutes daily on the <strong>Task 1 Chart Morpher</strong> sandbox.</li>
                      <li>• Complete the <strong>15-Second Part 3 Reflex Drill</strong> for 10 abstract topics.</li>
                      <li>• Record 2 full Cue Cards on the <strong>Speaking Flow Radar</strong> targeting 135 WPM.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: EXAMINER MASTERCLASS ARTICLES */}
        {activeMainTab === 'masterclass' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                  Speaking Band 9.0
                </span>
                <h4 className="font-bold text-slate-900 text-base">
                  IELTS Speaking Band 9 Complete Guide: Examiner Transcripts & Idioms
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real examiner transcripts, idiomatic discourse markers, natural fluency fillers, and strategic 1-minute cue card note-taking blueprints.
                </p>
              </div>
              <a
                href="/blog/ielts-speaking-band-9-complete-guide-exam-transcripts-idioms"
                className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 pt-2"
              >
                Read Complete Masterclass <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  Writing & SOP
                </span>
                <h4 className="font-bold text-slate-900 text-base">
                  Statement of Purpose (SOP) for Top US Universities
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Field-tested Statement of Purpose frameworks, paragraph progression formulas, and narrative hooks for competitive graduate school admissions.
                </p>
              </div>
              <a
                href="/blog/statement-of-purpose-sop-us-universities-winning-templates"
                className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 pt-2"
              >
                Read Complete Masterclass <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-800 border border-purple-200">
                  Lexical Resource
                </span>
                <h4 className="font-bold text-slate-900 text-base">
                  500+ High-Frequency Academic Collocations Handbook
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The definitive handbook of high-frequency academic collocations, syntactic pairings, false friends, and sentence templates for non-native test-takers.
                </p>
              </div>
              <a
                href="/blog/academic-collocations-handbook-ielts-higher-studies-gre"
                className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 pt-2"
              >
                Read Complete Masterclass <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 4: FREE ANKI DECKS & RESOURCE VAULT */}
        {activeMainTab === 'resources' && (
          <div className="max-w-3xl mx-auto space-y-4 text-xs">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Download className="w-4 h-4 text-teal-800" /> Free Candidate Downloadables & Cheat Sheets
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
                  100% Free Instant Download
                </span>
              </div>

              <div className="space-y-3">
                {/* Resource 1: Band 9 Collocations Handbook */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-teal-800" />
                      <h5 className="font-bold text-slate-900 text-xs">Band 9 Academic Collocations Master Handbook</h5>
                    </div>
                    <p className="text-[11px] text-slate-500">Curated Lexical Upgrades with definitions, Band 5.5➔8.5 contrasts, and Cambridge model sentences.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleOpenPrintable(
                        'IELTS Band 9 Academic Collocations Master Handbook',
                        'Essential Lexical Resource Upgrades & Examiner Models | Daloyar Hassan Shishir',
                        COLLOCATIONS_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-teal-300" /> Print / Save PDF
                    </button>
                    <button
                      onClick={() => handleDownloadWordDoc(
                        'IELTS-Band-9-Collocations-Handbook',
                        'IELTS Band 9 Academic Collocations Master Handbook',
                        'Essential Lexical Resource Upgrades & Examiner Models | Daloyar Hassan Shishir',
                        COLLOCATIONS_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <FileText className="w-3.5 h-3.5 text-blue-600" /> Word (.DOC)
                    </button>
                  </div>
                </div>

                {/* Resource 2: Task 1 Preposition & Reporting Matrix */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-teal-800" />
                      <h5 className="font-bold text-slate-900 text-xs">Task 1 Preposition & Reporting Matrix</h5>
                    </div>
                    <p className="text-[11px] text-slate-500">Master preposition rules (by vs to vs of), dynamic trend verbs, and Band 9 overview formulas.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => setShowTask1Modal(true)}
                      className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-teal-800" /> View Matrix
                    </button>
                    <button
                      onClick={() => handleOpenPrintable(
                        'IELTS Academic Task 1: Preposition & Reporting Matrix',
                        'Golden Preposition Rules, Dynamic Verbs & Overview Blueprint | Daloyar Hassan Shishir',
                        TASK1_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-teal-300" /> Print / Save PDF
                    </button>
                    <button
                      onClick={() => handleDownloadWordDoc(
                        'IELTS-Task-1-Preposition-Reporting-Matrix',
                        'IELTS Academic Task 1: Preposition & Reporting Matrix',
                        'Golden Preposition Rules, Dynamic Verbs & Overview Blueprint | Daloyar Hassan Shishir',
                        TASK1_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <FileText className="w-3.5 h-3.5 text-blue-600" /> Word (.DOC)
                    </button>
                  </div>
                </div>

                {/* Resource 3: Band 9 Speaking Discourse Markers */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Mic className="w-4 h-4 text-teal-800" />
                      <h5 className="font-bold text-slate-900 text-xs">IELTS Speaking Band 9 Discourse Markers & Idioms</h5>
                    </div>
                    <p className="text-[11px] text-slate-500">Natural thinking fillers, abstract opinion framing, and Part 3 nuance transitions.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleOpenPrintable(
                        'IELTS Speaking Band 9: Discourse Markers & Fluency Architecture',
                        'Native Thinking Fillers & Argumentation Connectors | Daloyar Hassan Shishir',
                        SPEAKING_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-teal-300" /> Print / Save PDF
                    </button>
                    <button
                      onClick={() => handleDownloadWordDoc(
                        'IELTS-Speaking-Band-9-Discourse-Markers',
                        'IELTS Speaking Band 9: Discourse Markers & Fluency Architecture',
                        'Native Thinking Fillers & Argumentation Connectors | Daloyar Hassan Shishir',
                        SPEAKING_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <FileText className="w-3.5 h-3.5 text-blue-600" /> Word (.DOC)
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}



        {/* TASK 1 PREPOSITION & REPORTING MATRIX MODAL */}
        {showTask1Modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[88vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
                    Academic Writing Task 1
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">Preposition & Dynamic Reporting Master Matrix</h3>
                </div>
                <button
                  onClick={() => setShowTask1Modal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* SECTION 1: 6 PREPOSITION RULES */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-700"></span> 1. The 6 Golden Preposition Rules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-teal-900">Rule 1: "BY" (Margin of Change)</div>
                    <p className="text-slate-600 text-[11px]">Indicates the difference or amount gained/lost.</p>
                    <div className="text-[11px] font-mono bg-white p-2 rounded-lg border border-slate-200 text-teal-950">
                      "Exports surged <strong>BY 18%</strong> (from 42% to 60%)."
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-teal-900">Rule 2: "TO" (Final Destination)</div>
                    <p className="text-slate-600 text-[11px]">Indicates the final endpoint where the metric arrived.</p>
                    <div className="text-[11px] font-mono bg-white p-2 rounded-lg border border-slate-200 text-teal-950">
                      "Renewables climbed <strong>TO 85 gigawatts</strong> in 2025."
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-teal-900">Rule 3: "OF" (Follows Nominal Noun)</div>
                    <p className="text-slate-600 text-[11px]">Used directly following nominal trend nouns.</p>
                    <div className="text-[11px] font-mono bg-white p-2 rounded-lg border border-slate-200 text-teal-950">
                      "A marked contraction <strong>OF 14 million units</strong>."
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-teal-900">Rule 4: "AT" (Static Level / Peak)</div>
                    <p className="text-slate-600 text-[11px]">Indicates a starting level or plateau peak.</p>
                    <div className="text-[11px] font-mono bg-white p-2 rounded-lg border border-slate-200 text-teal-950">
                      "Unemployment stood <strong>AT 4.2%</strong> in 2018."
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-teal-900">Rule 5: "IN / OVER / DURING"</div>
                    <p className="text-slate-600 text-[11px]">Defines the timeframe or duration of movement.</p>
                    <div className="text-[11px] font-mono bg-white p-2 rounded-lg border border-slate-200 text-teal-950">
                      "<strong>OVER the 15-year period</strong>, adoption doubled."
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-teal-900">Rule 6: "BETWEEN...AND"</div>
                    <p className="text-slate-600 text-[11px]">Paired boundaries (Never write 'between...to').</p>
                    <div className="text-[11px] font-mono bg-white p-2 rounded-lg border border-slate-200 text-teal-950">
                      "<strong>BETWEEN 2015 AND 2025</strong>, shipments rose."
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: DYNAMIC VERB TAXONOMY */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span> 2. Band 8.5+ Dynamic Trend Verbs & Adverbs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200 text-emerald-950 space-y-1">
                    <div className="font-bold text-xs text-emerald-900">🚀 Exponential Surge</div>
                    <ul className="text-[11px] space-y-0.5 text-emerald-800">
                      <li>• Soared / Skyrocketed</li>
                      <li>• Surged exponentially</li>
                      <li>• Climbed markedly</li>
                      <li>• Escalated sharply</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-teal-50/70 rounded-2xl border border-teal-200 text-teal-950 space-y-1">
                    <div className="font-bold text-xs text-teal-900">📈 Progressive Growth</div>
                    <ul className="text-[11px] space-y-0.5 text-teal-800">
                      <li>• Rose steadily</li>
                      <li>• Expanded progressively</li>
                      <li>• Registered consistent gains</li>
                      <li>• Trended upward incrementally</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-rose-50/70 rounded-2xl border border-rose-200 text-rose-950 space-y-1">
                    <div className="font-bold text-xs text-rose-900">📉 Severe Plunge</div>
                    <ul className="text-[11px] space-y-0.5 text-rose-800">
                      <li>• Plummeted / Slumped</li>
                      <li>• Collapsed abruptly</li>
                      <li>• Contracted substantially</li>
                      <li>• Dove to an all-time low</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200 text-amber-950 space-y-1">
                    <div className="font-bold text-xs text-amber-900">↘️ Mild Reduction</div>
                    <ul className="text-[11px] space-y-0.5 text-amber-800">
                      <li>• Dipped marginally</li>
                      <li>• Contracted slightly</li>
                      <li>• Edged down modestly</li>
                      <li>• Receded minimally</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-indigo-50/70 rounded-2xl border border-indigo-200 text-indigo-950 space-y-1">
                    <div className="font-bold text-xs text-indigo-900">〰️ Volatility & Waves</div>
                    <ul className="text-[11px] space-y-0.5 text-indigo-800">
                      <li>• Oscillated wildly</li>
                      <li>• Fluctuated erratically</li>
                      <li>• Displayed marked volatility</li>
                      <li>• Moved in wave-like cycles</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-slate-100 rounded-2xl border border-slate-300 text-slate-900 space-y-1">
                    <div className="font-bold text-xs text-slate-800">⏹️ Plateau & Equilibrium</div>
                    <ul className="text-[11px] space-y-0.5 text-slate-700">
                      <li>• Plateaued at</li>
                      <li>• Stabilized around</li>
                      <li>• Leveled off at</li>
                      <li>• Remained unchanged</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SECTION 3: % VS PERCENTAGE POINTS */}
              <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs space-y-1.5">
                <div className="font-bold text-amber-900 text-xs flex items-center gap-1.5">
                  <span>⚠️</span> Examiner Trap: Percent (%) vs. Percentage Point (pp) Distinction
                </div>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  If a metric moves from <strong>20% to 30%</strong>, it increased by <strong>10 percentage points (pp)</strong>, but grew by <strong>50 percent (%)</strong>.
                </p>
                <div className="text-[11px] font-mono bg-white/80 p-2 rounded-lg border border-amber-200 text-amber-950">
                  <em>"Although adoption increased by only <strong>10 percentage points</strong> (from 20% to 30%), this represented a <strong>50% expansion</strong> in total users."</em>
                </div>
              </div>

              {/* SECTION 4: 5 OVERVIEW BLUEPRINTS */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-700"></span> 3. The 5 Band 9 Overview Blueprints
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-teal-50 rounded-xl border border-teal-200 space-y-1">
                    <div className="font-bold text-teal-900">Blueprint 1: Dynamic Two-Trajectory Trend (Time Series)</div>
                    <p className="text-slate-700 text-[11px] italic">
                      "Overall, it is immediately manifest that while <strong>[Category A]</strong> and <strong>[Category B]</strong> experienced sustained upward trajectories over the surveyed span, <strong>[Category C]</strong> underwent a marked contraction. Furthermore, <strong>[Category A]</strong> remained the preeminent contributor throughout."
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900">Blueprint 2: Static Comparative Distribution (Pie / Bar Snapshot)</div>
                    <p className="text-slate-700 text-[11px] italic">
                      "In summary, what stands out from the data is that <strong>[Category A]</strong> accounted for the lion's share of overall figures, dwarfing all other sectors combined, whereas <strong>[Category D]</strong> represented an almost negligible fraction."
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900">Blueprint 3: Two-Chart Complex Synthesis (Line Graph + Pie Chart)</div>
                    <p className="text-slate-700 text-[11px] italic">
                      "Overall, while the line graph indicates a steady long-term escalation in total expenditure across all demographics, the accompanying pie chart underscores that housing and food consumption constituted the vast majority of consumer allocations."
                    </p>
                  </div>
                </div>
              </div>

              {/* MODAL FOOTER WITH PDF & DOC DOWNLOADS */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
                <div className="text-[11px] text-slate-500 font-medium">
                  Official Cambridge-aligned study document by Daloyar Hassan Shishir
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenPrintable(
                      'IELTS Academic Task 1: Preposition & Reporting Matrix',
                      'Golden Preposition Rules, Dynamic Verbs & Overview Blueprint | Daloyar Hassan Shishir',
                      TASK1_DOC_BODY
                    )}
                    className="px-4 py-2.5 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-teal-300" /> Print / Save PDF
                  </button>
                  <button
                    onClick={() => handleDownloadWordDoc(
                      'IELTS-Task-1-Preposition-Reporting-Matrix',
                      'IELTS Academic Task 1: Preposition & Reporting Matrix',
                      'Golden Preposition Rules, Dynamic Verbs & Overview Blueprint | Daloyar Hassan Shishir',
                      TASK1_DOC_BODY
                    )}
                    className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <FileText className="w-4 h-4 text-blue-600" /> Word (.DOC)
                  </button>
                  <button
                    onClick={() => setShowTask1Modal(false)}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
