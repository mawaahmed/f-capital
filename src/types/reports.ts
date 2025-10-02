export interface Report {
  id: string;
  title: string;
  generatedAt: string; 
  fileUrl?: string;  
  summary?: string;
}

export interface ReportInput {
  title: string;
  filters?: Record<string, unknown>;
}
